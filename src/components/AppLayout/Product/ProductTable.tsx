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

import { productLists } from 'src/components/constant/productItems';

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

const ProductTable = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body2">Product Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Category</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Price</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Stock</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Sold</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Revenue</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productLists.map((product, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2">{product.productName}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{product.category}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{product.price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{product.stock}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{product.sold}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{product.revenue}</Typography>
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

export default ProductTable;
