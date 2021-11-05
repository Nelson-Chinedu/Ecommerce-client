import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { GET_PRODUCT } from 'src/queries';

import { useStyles } from 'src/components/AppLayout/Merchant/Product/styled.product';

const ProductTable = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: {
      take: 10,
      skip: 0,
    },
  });

  if (loading) return <Typography>Loading...</Typography>;

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

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
            {data &&
              data.client.getProduct.products.map(
                (product: any, index: number) => (
                  <React.Fragment key={index}>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">{product.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {product.category}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          -N-{product.newPrice}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{product.stock}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">N/A</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">N/A</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={handleOpenPopover}>
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <Menu
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClosePopover}
                    >
                      <MenuItem>Edit</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </Menu>
                  </React.Fragment>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
