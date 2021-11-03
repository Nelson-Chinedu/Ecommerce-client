import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { SettingProvider } from 'src/components/context/merchantSetting-context';
// import AccountEdit from 'src/components/AppLayout/Merchant/Setting/AccountEdit';

const ChangePassword = dynamic(
  () => import('src/components/AppLayout/Merchant/Setting/PasswordEdit'),
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

const ChangePasswordPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Change Password</title>
      </Head>
      <SettingProvider>
        <ChangePassword />
      </SettingProvider>
    </>
  );
};

export default ChangePasswordPage;
