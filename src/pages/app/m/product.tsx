import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import store from 'store';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { SettingProvider } from 'src/components/context/merchantSetting-context';
import { MerchantProductProvider } from 'src/components/context/merchantProduct-context';
import { ModalProvider } from 'src/components/context/modalContext';

const Product = dynamic(
  () => import('src/components/AppLayout/Merchant/Product'),
  {
    loading: () => (
      <Grid container justify="space-between" spacing={4}>
        <Grid item sm={3}>
          <Box
            style={{ background: '#9e9e9e4f', width: '100%', height: '100vh' }}
          />
        </Grid>
        <Grid item sm={9}>
          <Box
            style={{ background: '#9e9e9e4f', width: '98%', height: '100vh' }}
          />
        </Grid>
      </Grid>
    ),
    ssr: false,
  }
);

const ProductPage = () => {
  const router = useRouter();
  const isLoggedIn = store.get('__clu');

  if (!isLoggedIn) {
    router.push('/auth/login');
  }
  return (
    <>
      <Head>
        <title>Multibuy | Product</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
      </Head>
      <SettingProvider>
        <MerchantProductProvider>
          <ModalProvider>
            <Product />
          </ModalProvider>
        </MerchantProductProvider>
      </SettingProvider>
    </>
  );
};

export default ProductPage;
