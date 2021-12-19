import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';

const Success = dynamic(
  () => import('src/components/MainLayout/Payment/Success'),
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
        <Box style={{ width: '50%', margin: '10em auto', textAlign: 'center' }}>
          <Image
            src="/image/loading.svg"
            alt="loading"
            width={50}
            height={50}
          />
        </Box>
      </Box>
    ),
    ssr: false,
  }
);

const SuccessPage = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Product-detail</title>
      </Head>
      <Success />
    </>
  );
};

export default SuccessPage;
