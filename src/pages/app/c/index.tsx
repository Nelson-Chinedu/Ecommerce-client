import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import store from 'store';
import Box from '@material-ui/core/Box';

const Landing = dynamic(
  () => import('src/components/AppLayout/Customer/Landing'),
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
            alt="loading spinner"
            width={50}
            height={50}
          />
        </Box>
      </Box>
    ),
    // ssr: false,
  }
);

const Index = () => {
  const router = useRouter();
  const isLoggedIn = store.get('__clu');

  if (!isLoggedIn) {
    router.push('/auth/login');
  }
  return (
    <>
      <Head>
        <title>Multibuy | Home</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=0.1" /> */}
      </Head>
      <Landing />
    </>
  );
};

export default Index;
