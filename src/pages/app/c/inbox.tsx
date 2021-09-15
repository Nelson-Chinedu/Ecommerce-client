import { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
import Box from '@material-ui/core/Box';

const Inbox = dynamic(() => import('src/components/AppLayout/Customer/Inbox'), {
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
        <Image src="/image/loading.svg" alt="loading" width={50} height={50} />
      </Box>
    </Box>
  ),
  ssr: false,
});

const InboxPage: FunctionComponent<{}> = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Inbox</title>
      </Head>
      <Inbox />
    </>
  );
};

export default InboxPage;
