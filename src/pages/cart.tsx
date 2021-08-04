import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Cart = dynamic(() => import('src/components/MainLayout/Cart'), {
  loading: () => (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography>page loading...</Typography>
    </Box>
  ),
  ssr: false,
});

const CartPage: FunctionComponent<{}> = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Cart</title>
      </Head>
      <Cart />
    </>
  );
};

export default CartPage;
