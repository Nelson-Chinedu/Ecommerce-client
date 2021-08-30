import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Box from '@material-ui/core/Box';

const Landing = dynamic(() => import('src/components/AppLayout/Customer/Landing'), {
  loading: () => (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box style={{width: '50%', margin: '10em auto', textAlign: 'center'}}>
        <Image src='/image/loading.svg' alt="loading" width={50} height={50} />
      </Box>
    </Box>
  ),
  ssr: false,
});

const Index = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Home</title>
      </Head>
      <Landing />
    </>
  )
};

export default Index;