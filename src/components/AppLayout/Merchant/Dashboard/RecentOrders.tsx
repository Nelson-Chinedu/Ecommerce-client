import React, { FunctionComponent, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { showDate } from 'src/components/SharedLayout/Date';

import { useStyles } from 'src/components/AppLayout/Merchant/Dashboard/styled.dashboard';
import {
  MerchantRecentOrderContext,
  IProps,
} from 'src/components/context/merchantRecentOrder-context';

const RecentOrders: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { loading, data } = useContext(MerchantRecentOrderContext);

  if (loading) {
    return <div style={{ background: '#9e9e9e4f', height: '350px' }} />;
  }

  return (
    <Paper style={{ height: '350px' }}>
      {data && data.length === 0 ? (
        <Box className={classes.emptyState}>
          <Image src="/image/emptyOrder.svg" width={100} height={100} alt="" />
          <Typography>Hang on tight, No recent order yet !!!</Typography>
        </Box>
      ) : (
        <>
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
                {data &&
                  data.map((order: IProps) => (
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
                        <Typography variant="body2">
                          {order.account.email}
                        </Typography>
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
                        <Typography
                          variant="body2"
                          style={{ textTransform: 'capitalize' }}
                        >
                          {order.status === 'processing'
                            ? 'New Order'
                            : order.status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Paper>
  );
};

export default RecentOrders;
