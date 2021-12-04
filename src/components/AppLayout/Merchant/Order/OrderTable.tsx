import React from 'react';
import { useQuery } from '@apollo/client';
import NumberFormat from 'react-number-format';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { useStyles } from 'src/components/AppLayout/Merchant/Order/styled.order';
import { GET_MERCHANT_ORDER } from 'src/queries';
import { showDate } from 'src/components/SharedLayout/Date';

interface IProps {
  orderId: string;
  createdAt: string;
  status: 'processing' | 'delivered' | 'cancelled';
  product: { newPrice: number; number: 'string' };
  account: { email: string };
}

interface IData {
  client: {
    getMerchantOrders: {
      orders: IProps[];
    };
  };
}

const OrderTable = () => {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_MERCHANT_ORDER);

  if (loading) return <p>loading...</p>;

  const {
    client: {
      getMerchantOrders: { orders },
    },
  }: IData = data;

  return (
    <Box className={classes.root}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body2">#Order No.</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Date</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">#Product ID</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Price</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Action</Typography>
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
                  <Typography variant="body2">
                    {order.product.number}
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
                  <Typography
                    component="span"
                    variant="body2"
                    className={
                      order.status === 'processing'
                        ? 'pending'
                        : order.status === 'delivered'
                        ? 'delivered'
                        : 'cancelled'
                    }
                  >
                    {order.status === 'processing' ? 'New order' : order.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
