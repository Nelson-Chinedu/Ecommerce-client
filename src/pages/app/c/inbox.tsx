import { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import store from 'store';
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
        <Image
          src="/image/loading.svg"
          alt="loading spinner"
          width={50}
          height={50}
        />
      </Box>
    </Box>
  ),
  // ssr: false,
});

const InboxPage: FunctionComponent<{}> = () => {
  const router = useRouter();
  const isLoggedIn = store.get('__clu');

  if (!isLoggedIn) {
    router.push('/auth/login');
  }
  return (
    <>
      <Head>
        <title>Multibuy | Inbox</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
      </Head>
      <Inbox />
    </>
  );
};

export default InboxPage;
