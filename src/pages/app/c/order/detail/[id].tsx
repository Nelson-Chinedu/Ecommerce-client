import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import store from 'store';
import Box from '@material-ui/core/Box';

import { ModalProvider } from 'src/components/context/modalContext';

const Preview = dynamic(
  () => import('src/components/AppLayout/Customer/Order/Preview'),
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
    // ssr: false,
  }
);

const OrderPreviewPage = () => {
  const router = useRouter();
  const isLoggedIn = store.get('__clu');

  if (!isLoggedIn) {
    router.push('/auth/login');
  }
  return (
    <>
      <Head>
        <title>Multibuy | Product-detail</title>
      </Head>
      <ModalProvider>
        <Preview />
      </ModalProvider>
    </>
  );
};

export default OrderPreviewPage;
