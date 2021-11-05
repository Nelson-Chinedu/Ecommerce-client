import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { SettingProvider } from 'src/components/context/merchantSetting-context';

const Customer = dynamic(
  () => import('src/components/AppLayout/Merchant/Customer'),
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

const CustomerPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Customer</title>
      </Head>
      <SettingProvider>
        <Customer />
      </SettingProvider>
    </>
  );
};

export default CustomerPage;
