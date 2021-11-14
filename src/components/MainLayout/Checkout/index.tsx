import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CheckoutForm from 'src/components/MainLayout/Checkout/CheckoutForm';
import OrderSummary from 'src/components/MainLayout/Checkout/OrderSummary';

import { useStyles } from 'src/components/MainLayout/Checkout/styled.checkout';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Newsletter from 'src/components/SharedLayout/Newsletter';
import Footer from 'src/components/SharedLayout/Footer';

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
            <Grid item sm={7}>
              <CheckoutForm />
            </Grid>
            <Grid item sm={4}>
              <OrderSummary />
            </Grid>
          </Grid>
          <Newsletter />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default observer(Checkout);
