import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Checkout = dynamic(() => import('src/components/MainLayout/Checkout'), {
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

const CheckoutPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Checkout</title>
      </Head>
      <Checkout />
    </>
  );
};

export default CheckoutPage;
