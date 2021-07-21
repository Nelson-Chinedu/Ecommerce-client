import React, { FunctionComponent } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import { carts, Props } from 'src/components/constant/carts';

import { useStyles } from 'src/components/MainLayout/Cart/styled.cart';


const Titles = ['#', 'Products', 'Price', 'Quantity', 'Subtotal', 'Action'];


const CartTable: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {Titles.map((title: string, index: number) => (
              <TableCell key={index}>
                <Typography variant="h6">{title}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((cart: Props, index: number) => (
            <TableRow key={index}>
              <TableCell>{cart.no}</TableCell>
              <TableCell>{cart.product}</TableCell>
              <TableCell>{cart.price}</TableCell>
              <TableCell>
                <span className={classes.quantity}>{cart.quantity}</span>
              </TableCell>
              <TableCell>{cart.subtotal}</TableCell>
              <TableCell>
                <span className={classes.action}>{cart.action}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
