import React from 'react';
import { observer } from 'mobx-react-lite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { useStore } from 'src/store';

import { useStyles } from 'src/components/AppLayout/Merchant/Order/styled.order';

const OrderTable = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
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
                <Typography variant="body2">Customer Name</Typography>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {uiStore.orderLists.map((order, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2">{order.orderNo}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{order.date}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{order.customerName}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{order.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{order.price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    component="span"
                    variant="body2"
                    className={
                      order.status === 'Pending'
                        ? 'pending'
                        : order.status === 'Delivered'
                        ? 'delivered'
                        : 'canceled'
                    }
                  >
                    {order.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default observer(OrderTable);
