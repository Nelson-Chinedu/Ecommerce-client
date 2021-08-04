import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Product = dynamic(
  () => import('src/components/MainLayout/ProductDetail'),
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
    ssr: false,
  }
);

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Product-detail</title>
      </Head>
      <Product />
    </>
  );
};

export default ProductPage;
