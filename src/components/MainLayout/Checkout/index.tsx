import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CheckoutForm from 'src/components/MainLayout/Checkout/CheckoutForm';
import OrderPreview from 'src/components/MainLayout/Checkout/OrderPreview';
import { useStyles } from 'src/components/MainLayout/Checkout/styled.checkout';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Newsletter from 'src/components/SharedLayout/Newsletter';

const Checkout: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <Navigation />
      <Box className="banner-wrapper">
        <Box className="banner-checkout" />
        <Box className="banner-checkout-desc" style={{ zIndex: 999999 }}>
          <Typography variant="h4" style={{ color: 'white' }}>
            Checkout
          </Typography>
          <Typography variant="body2" style={{ color: 'white' }}>
            Enter shipping address and fill all fields below to complete your
            order
          </Typography>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item sm={8}>
              <Typography variant="h6">Shipping Address</Typography>
              <CheckoutForm />
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h6">Your Order</Typography>
              <OrderPreview />
            </Grid>
          </Grid>
          <Newsletter />
        </Container>
      </Box>
    </>
  );
};

export default Checkout;
