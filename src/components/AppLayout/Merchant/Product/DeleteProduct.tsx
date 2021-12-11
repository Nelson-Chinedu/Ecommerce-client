import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import Button from 'src/components/SharedLayout/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStore } from 'src/store';

import { DELETE_MERCHANT_PRODUCT, GET_ALL_PRODUCTS } from 'src/queries';

import Modal from 'src/components/AppLayout/Merchant/Product/Modal/DeleteProductModal';
import { useStyles } from 'src/components/AppLayout/Merchant/Product/styled.product';

import useModalControl from 'src/components/hooks/useModalControl';

const DeleteProduct: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const router = useRouter();
  const [state, setState] = useModalControl();
  const [deleteProduct, { loading }] = useMutation(DELETE_MERCHANT_PRODUCT, {
    refetchQueries: [{ query: GET_ALL_PRODUCTS }],
  });

  const handleCloseModal = () => {
    setState({ ...state, modal: '', id: null });
  };

  const handleDeleteProduct = async () => {
    try {
      const product = await deleteProduct({
        variables: {
          productNumber: state.id,
        },
      });
      if (product) {
        const {
          data: {
            client: {
              deleteProduct: { message },
            },
          },
        } = product;
        uiStore.showSnackbar = true;
        uiStore.serverMessage = message;
        uiStore.snackbarSeverity = 'success';
      }
    } catch (error: any) {
      if (error.message === 'Permission denied') {
        router.push('/auth/login');
        uiStore.showSnackbar = true;
        uiStore.serverMessage = error.message;
        uiStore.snackbarSeverity = 'error';
      } else if (
        error.message === 'Unable to delete, Product has one or more order'
      ) {
        uiStore.showSnackbar = true;
        uiStore.serverMessage = error.message;
        uiStore.snackbarSeverity = 'error';
      }
    }
  };

  return (
    <React.Fragment>
      <Modal>
        <Box className={classes.deleteWrapper}>
          <Typography variant="h6">Delete Product</Typography>
          <Typography variant="subtitle1">
            Are you sure you want to delete this product
          </Typography>
          <Grid container spacing={1}>
            <Grid item sm={6}>
              <Button
                variant="outlined"
                fullWidth
                disableElevation
                color="secondary"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item sm={6}>
              <Button
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                onClick={handleDeleteProduct}
              >
                {loading ? (
                  <CircularProgress size={20} style={{ color: 'white' }} />
                ) : (
                  'Delete'
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default observer(DeleteProduct);
