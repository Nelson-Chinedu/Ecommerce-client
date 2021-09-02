import { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
import Box from '@material-ui/core/Box';

const Account = dynamic(
  () => import('src/components/AppLayout/Customer/Account'),
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

const AccountPage: FunctionComponent<{}> = () => {
  return (
    <>
      <Head>
        <title>Multibuy | Account</title>
      </Head>
      <Account />
    </>
  );
};

export default AccountPage;
