import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';

import { useStore } from 'src/store';

import CartTable from 'src/components/MainLayout/Cart/CartTable';
import CartPayment from 'src/components/MainLayout/Cart/CartPayment';
import { useStyles } from 'src/components/MainLayout/Cart/styled.cart';

const Cart: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  return (
    <Box>
      <Navigation />
      <Box className={classes.root}>
        {uiStore.cartItems.length === 0 ? (
          <Box className={classes.emptyCart}>
            <Image
              src="/image/shopping-cart.png"
              width={80}
              height={80}
              alt="empty cart"
            />
            <Typography variant="subtitle2">No item added to cart</Typography>
          </Box>
        ) : (
          <>
            <Typography variant="h4">
              <strong>Your Cart</strong>
            </Typography>
            <Box className={classes.wrapper}>
              <CartTable />
              <CartPayment />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
