import React, { FunctionComponent, useContext } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import NumberFormat from 'react-number-format';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from 'src/components/SharedLayout/Button';

import { useStore } from 'src/store';

import { useStyles } from 'src/components/MainLayout/Cart/styled.cart';
import { UserContext } from 'src/components/context/userContext';

const CartPayment: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const { isLoggedIn } = useContext(UserContext);
  const router = useRouter();

  const handleProceed = () => {
    if (isLoggedIn) {
      router.push('/checkout');
    } else {
      router.push('/auth/login?return_url=%2fcheckout');
    }
  };

  const handleContinue = () => {
    if (isLoggedIn) {
      router.push('/app/c');
    } else {
      router.push('/');
    }
  };

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.container}
    >
      <Grid item sm={2}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="subtitle2">Subtotal: </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              &#8358;
              <NumberFormat
                value={uiStore.productPrice.toFixed(2)}
                displayType="text"
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="subtitle2">Total:</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              &#8358;
              <NumberFormat
                value={uiStore.productPrice.toFixed(2)}
                displayType="text"
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={4}>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth={true}
              disableElevation={true}
              onClick={handleContinue}
            >
              Continue Shopping
            </Button>
          </Grid>
          <Grid item sm={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth={true}
              disableElevation={true}
              onClick={handleProceed}
            >
              Proceed to checkout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(CartPayment);
