import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import CheckoutForm from 'src/components/MainLayout/Checkout/CheckoutForm';
import OrderPreview from 'src/components/MainLayout/Checkout/OrderPreview';
import { useStyles } from 'src/components/MainLayout/Checkout/styled.checkout';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Newsletter from 'src/components/SharedLayout/Newsletter';
import Footer from 'src/components/SharedLayout/Footer';

import CheckoutPayment from 'src/components/MainLayout/Checkout/CheckoutPayment';

import { useStore } from 'src/store';

const Checkout: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const handleCollapse = (prop: any) => {
    uiStore.toggleCollapse(prop);
  };

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
              <Typography variant="h6">
                <Checkbox
                  onClick={() => handleCollapse('shipping')}
                  checkedIcon={<CheckCircleIcon />}
                  icon={<RadioButtonUncheckedIcon />}
                />{' '}
                Shipping Address
              </Typography>
              <Collapse in={uiStore.collapseShipping}>
                <CheckoutForm />
              </Collapse>
              <Typography variant="h6" style={{ marginTop: '2em' }}>
                <Checkbox
                  onClick={() => handleCollapse('payment')}
                  checkedIcon={<CheckCircleIcon />}
                  icon={<RadioButtonUncheckedIcon />}
                />{' '}
                Payment
              </Typography>
              <Collapse in={uiStore.collapsePayment}>
                <CheckoutPayment />
              </Collapse>
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h6">Your Order</Typography>
              <OrderPreview />
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
