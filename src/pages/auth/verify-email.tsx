import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const VerifyEmail = dynamic(
  () => import('src/components/AuthLayout/VerifyEmail'),
  {
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
    // ssr: false,
  }
);

const verifyEmailPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Email Verification</title>
      </Head>
      <VerifyEmail />
    </>
  );
};

export default verifyEmailPage;
