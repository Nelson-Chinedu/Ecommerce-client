import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { recentOrders, Props } from 'src/components/constant/recentOrders';

const RecentOrders: FunctionComponent<{}> = () => {
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
          <Typography variant="body1">See all</Typography>
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
                <Typography variant="body2"> Customer Name </Typography>
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
            {recentOrders.map((recentOrder: Props, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2">
                    {recentOrder.orderNumber}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {' '}
                    {recentOrder.orderDate}{' '}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {' '}
                    {recentOrder.customerName}{' '}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2"> {recentOrder.price} </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {' '}
                    {recentOrder.status}{' '}
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
