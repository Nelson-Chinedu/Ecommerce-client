import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';

import CartTable from 'src/components/MainLayout/Cart/CartTable';
import CartPayment from 'src/components/MainLayout/Cart/CartPayment';
import { useStyles } from 'src/components/MainLayout/Cart/styled.cart';

const Cart = () => {
  const classes = useStyles();
  return (
    <Box>
      <Navigation />
      <Box className={classes.root}>
        <Typography variant="h4">
          <strong>Your Cart</strong>
        </Typography>
        <Box className={classes.wrapper}>
          <CartTable />
          <CartPayment />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
