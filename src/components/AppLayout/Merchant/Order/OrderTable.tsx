import React, { useContext, FunctionComponent, useState } from 'react';
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
import ListItemText from '@material-ui/core/ListItemText';

import { useStyles } from 'src/components/AppLayout/Merchant/Order/styled.order';

import { showDate } from 'src/components/SharedLayout/Date';
import { StyledMenu } from 'src/components/SharedLayout/PopoverMenu';

import {
  MerchantOrderContext,
  IProps,
} from 'src/components/context/merchantOrder-context';

import useModalControl from 'src/components/hooks/useModalControl';

const OrderTable: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { loading, data } = useContext(MerchantOrderContext);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [state, setState] = useModalControl();
  const [isSelectedOrder, setIsSelectedOrder] = useState(null);

  const handlePopeverOpen = (event: any, id: string | number) => {
    event.stopPropagation();
    setIsSelectedOrder(id);
    setAnchorEl(event.currentTarget);
  };

  const handlePopeverClose = () => {
    setAnchorEl(null);
    setIsSelectedOrder(null);
  };

  const handleUpdateStatus = () => {
    setState({
      ...state,
      modal: 'updateOrderStatusModal',
      id: isSelectedOrder,
    });
    setAnchorEl(null);
  };

  const handleProductClick = (id: string | number) => {
    setIsSelectedOrder(id);
  };

  if (loading) return <p>loading...</p>;

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
                      {order.product.number}
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
                      component="span"
                      variant="body2"
                      className={
                        order.status === 'processing'
                          ? 'pending'
                          : order.status === 'delivered'
                          ? 'delivered'
                          : order.status === 'Enroute'
                          ? 'enroute'
                          : 'cancelled'
                      }
                    >
                      {order.status === 'processing'
                        ? 'New order'
                        : order.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={() => handleProductClick(order.orderId)}
                    >
                      <MoreVertIcon
                        fontSize="small"
                        style={{ cursor: 'pointer' }}
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        onClick={(event) =>
                          handlePopeverOpen(event, order.orderId)
                        }
                      />
                      <StyledMenu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handlePopeverClose}
                      >
                        <ListItemText
                          primary="Update Status"
                          className="edit"
                          onClick={handleUpdateStatus}
                        />
                      </StyledMenu>
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
