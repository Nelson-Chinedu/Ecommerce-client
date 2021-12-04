import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import NumberFormat from 'react-number-format';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { GET_MERCHANT_ORDER } from 'src/queries';

const TotalRevenue: FunctionComponent<{}> = () => {
  const { loading, data } = useQuery(GET_MERCHANT_ORDER);

  if (loading) {
    return <p>Loading...</p>;
  }

  const {
    client: {
      getMerchantOrders: { orders },
    },
  } = data;

  const allOrders = orders;

  const orderRevenue = allOrders.filter(
    (order: { status: string }) => order.status === 'delivered'
  );

  const totalRevenue = orderRevenue
    .map((order: { product: { newPrice: number } }) => order.product.newPrice)
    .reduce((a: number, b: number) => Number(a) + Number(b), 0);

  return (
    <Paper elevation={1}>
      <Typography variant="body2">Total Revenue</Typography>
      <Typography variant="h6">
        ₦
        <NumberFormat
          value={totalRevenue}
          thousandSeparator={true}
          decimalSeparator="."
          decimalScale={2}
          fixedDecimalScale={true}
          displayType="text"
        />
      </Typography>
    </Paper>
  );
};

export default TotalRevenue;
