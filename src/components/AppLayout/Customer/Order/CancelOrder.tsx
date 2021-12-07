import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import { useStore } from 'src/store';

import Modal from 'src/components/AppLayout/Customer/Order/Modal';
import { useStyles } from 'src/components/AppLayout/Merchant/Order/styled.order';

import Button from 'src/components/SharedLayout/Button';

import useModalControl from 'src/components/hooks/useModalControl';

import { CUSTOMER_CANCEL_ORDER } from 'src/queries';

const CancelOrder: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const router = useRouter();
  const [state, setState] = useModalControl();
  const [cancelOrder, { loading }] = useMutation(CUSTOMER_CANCEL_ORDER);

  const handleCloseModal = () => {
    setState({ ...state, modal: '', id: '' });
  };

  const handleCancelOrder = async () => {
    try {
      const orderUpdate = await cancelOrder({
        variables: { orderNumber: state.id },
      });
      if (orderUpdate) {
        const {
          data: {
            client: {
              cancelOrder: { message },
            },
          },
        } = orderUpdate;
        setState({ ...state, modal: '', id: '' });
        router.push('/app/c/orders');
        uiStore.serverMessage = message;
        uiStore.snackbarSeverity = 'success';
        uiStore.showSnackbar = true;
      }
    } catch (error) {
      uiStore.serverMessage = 'An error occured';
      uiStore.snackbarSeverity = 'error';
      uiStore.showSnackbar = true;
    }
  };

  return (
    <Modal>
      <Box className={classes.wrapper}>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          style={{ marginBottom: '.8em' }}
        >
          <Grid item>
            <IconButton
              size="medium"
              aria-label="Go back"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: '2em', textAlign: 'center' }}>
          <Grid item sm={12}>
            <Typography variant="subtitle2">Cancel Order</Typography>
            <Typography>Are you sure you want to cancel this order</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item sm={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disableElevation
              onClick={handleCancelOrder}
            >
              {loading ? <CircularProgress size={25} /> : 'Yes'}
            </Button>
          </Grid>
          <Grid item sm={4}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              disableElevation
              onClick={handleCloseModal}
            >
              No
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default observer(CancelOrder);
