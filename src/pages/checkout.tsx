import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import { ProfileProvider } from 'src/components/context/userProfile-context';

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
      <Box style={{ width: '50%', margin: '10em auto', textAlign: 'center' }}>
        <Image src="/image/loading.svg" alt="loading" width={50} height={50} />
      </Box>
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
      <ProfileProvider>
        <Checkout />
      </ProfileProvider>
    </>
  );
};

export default CheckoutPage;
