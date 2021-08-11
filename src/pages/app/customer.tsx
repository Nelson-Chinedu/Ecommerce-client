import React from 'react';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Customer = dynamic(() => import('src/components/AppLayout/Customer'), {
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
})

const CustomerPage = () => {
  return(
    <Customer />
  )
};

export default CustomerPage;