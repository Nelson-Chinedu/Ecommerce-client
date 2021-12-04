import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { GET_MERCHANT_PRODUCT_COUNT } from 'src/queries';

const TopProduct: FunctionComponent<{}> = () => {
  const { loading, data } = useQuery(GET_MERCHANT_PRODUCT_COUNT);

  if (loading) {
    return <div style={{ background: '#9e9e9e4f', height: '200px' }} />;
  }
  const {
    client: {
      getTotalMerchantProduct: { count },
    },
  } = data;

  return (
    <Paper elevation={1}>
      <Typography variant="body2">Total Products Added</Typography>
      <Typography variant="h6">{count}</Typography>
    </Paper>
  );
};

export default TopProduct;
