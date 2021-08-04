import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Login = dynamic(() => import('src/components/AuthLayout/Login'), {
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

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Login</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
