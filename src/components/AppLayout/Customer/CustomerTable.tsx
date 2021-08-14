import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

import { customers } from 'src/components/constant/customers';

const useStyles = makeStyles({
  root: {
    '& .MuiTableRow-head': {
      background: '#007AFF',
      '& .MuiTableCell-head': {
        '& > *': {
          color: 'white',
        },
      },
    },
    '& .pending': {
      background: '#FFF1E0',
      color: '#FEB54B',
      padding: '.5em .8em',
      borderRadius: '5px',
      textAlign: 'center',
    },
    '& .delivered': {
      background: '#E5F8F7',
      color: '#74DDD0',
      padding: '.5em .8em',
      borderRadius: '5px',
      textAlign: 'center',
    },
    '& .canceled': {
      background: '#FFECEC',
      color: '#FF8791',
      padding: '.5em .8em',
      borderRadius: '5px',
      textAlign: 'center',
    },
  },
});

const CustomerTable = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body2">Customer Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">#ID</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Spent</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Last Ordered</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Phone</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2">
                    {customer.customerName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{customer.id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{customer.spent}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {customer.lastOrdered}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{customer.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{customer.phone}</Typography>
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

export default CustomerTable;
