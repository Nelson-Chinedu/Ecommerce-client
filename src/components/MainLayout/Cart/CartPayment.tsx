import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';

import { useStyles } from 'src/components/MainLayout/Cart/styled.cart';

const CartPayment: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.container}
    >
      <Grid item sm={6}>
        <Grid container spacing={1}>
          <Grid item>
            <TextInput
              variant="outlined"
              size="small"
              fullWidth={true}
              color="secondary"
              placeholder="Coupon code"
              type="text"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              fullWidth={true}
              disableElevation={true}
            >
              Apply Coupon
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={4}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item sm={4}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle2">Subtotal:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" style={{ color: 'green' }}>
                  $299.00
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle2">Total:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" style={{ color: 'green' }}>
                  $299.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth={true}
              disableElevation={true}
              href="/checkout"
            >
              Proceed to checkout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartPayment;
