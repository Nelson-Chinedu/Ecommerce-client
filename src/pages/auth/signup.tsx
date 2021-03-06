import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Signup = dynamic(() => import('src/components/AuthLayout/Signup'), {
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

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Signup</title>
      </Head>
      <Signup />
    </>
  );
};

export default SignupPage;
