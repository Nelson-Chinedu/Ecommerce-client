import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import NumberFormat from 'react-number-format';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { GET_MERCHANT_RECENT_ORDER } from 'src/queries';

import { showDate } from 'src/components/SharedLayout/Date';

import { useStyles } from 'src/components/AppLayout/Merchant/Dashboard/styled.dashboard';

interface IProps {
  orderId: string;
  createdAt: string;
  status: 'processing' | 'delivered' | 'cancelled';
  account: { email: string };
  product: { newPrice: string };
}

interface IData {
  client: {
    getRecentOrders: {
      orders: IProps[];
    };
  };
}

const RecentOrders: FunctionComponent<{}> = () => {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_MERCHANT_RECENT_ORDER, {
    variables: { take: 5, skip: 0 },
  });

  if (loading) {
    return <div style={{ background: '#9e9e9e4f', height: '350px' }} />;
  }

  const {
    client: {
      getRecentOrders: { orders },
    },
  }: IData = data;

  return (
    <Paper style={{ height: '350px' }}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        style={{ marginBottom: '1em' }}
      >
        <Grid item>
          <Typography variant="body1">Recent Orders</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.seeAll}>
            <Link href="/app/m/order">See all</Link>
          </Typography>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body2"> #Order No. </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2"> Date </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2"> Customer Email </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2"> Price </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2"> Status </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order: IProps) => (
              <TableRow key={order.orderId}>
                <TableCell>
                  <Typography variant="body2">{order.orderId}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {showDate(order.createdAt)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{order.account.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    ₦
                    <NumberFormat
                      value={`${order.product.newPrice}`}
                      thousandSeparator={true}
                      decimalSeparator="."
                      decimalScale={2}
                      fixedDecimalScale={true}
                      displayType="text"
                    />
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {order.status === 'processing' ? 'New Order' : order.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentOrders;
