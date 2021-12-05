import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Button from 'src/components/SharedLayout/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Modal from 'src/components/AppLayout/Merchant/Product/Modal/DeleteProductModal';
import { useStyles } from 'src/components/AppLayout/Merchant/Product/styled.product';

const DeleteProduct: FunctionComponent<{}> = () => {
  const classes = useStyles();

  const handleDeleteProduct = () => {};

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
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* {uiStore.serverMessage.length > 1 && (
        <Snackbar
          open={uiStore.serverMessage.length > 1 ? true : false}
          handleClose={handleClose}
          message={uiStore.serverMessage}
          severity="success"
        />
      )} */}
    </React.Fragment>
  );
};

export default observer(DeleteProduct);
