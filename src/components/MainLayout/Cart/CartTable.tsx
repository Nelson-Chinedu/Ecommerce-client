import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import { useStore } from 'src/store';

import { useStyles } from 'src/components/MainLayout/Cart/styled.cart';

const Titles = ['#', 'Products', 'Price', 'Quantity', 'Subtotal', 'Action'];

interface IProps {
  number: string;
  itemId: number;
  itemQty: string;
  itemName: string;
  itemPrice: string;
}

const CartTable: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const cartItems: Array<IProps> = toJS(uiStore.cartItems).flat();

  const handleRemoveItem = (id: number) => {
    uiStore.handleRemoveFromCart(id);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {Titles.map((title: string, index: number) => (
              <TableCell key={index}>
                <Typography variant="subtitle1">{title}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item: IProps) => (
            <TableRow key={item.itemId}>
              <TableCell>{item.itemId}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell>{item.itemPrice}</TableCell>
              <TableCell>
                <span className={classes.quantity}>{item.itemQty}</span>
              </TableCell>
              <TableCell>{item.itemPrice}</TableCell>
              <TableCell>
                <span
                  className={classes.action}
                  onClick={() => handleRemoveItem(item.itemId)}
                >
                  Remove item
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default observer(CartTable);
