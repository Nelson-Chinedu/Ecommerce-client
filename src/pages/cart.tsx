import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';

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
      <Box style={{ width: '50%', margin: '10em auto', textAlign: 'center' }}>
        <Image src="/image/loading.svg" alt="loading" width={50} height={50} />
      </Box>
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
