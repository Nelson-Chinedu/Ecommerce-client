import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const FAQ = dynamic(() => import('src/components/MainLayout/FAQ'), {
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

const FAQPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | FAQ</title>
      </Head>
      <FAQ />
    </>
  );
};

export default FAQPage;
