import React, { useContext, useState, FunctionComponent } from 'react';
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
import Menu, { MenuProps } from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import { useStyles } from 'src/components/AppLayout/Merchant/Product/styled.product';

import {
  MerchantProductContext,
  IProps,
} from 'src/components/context/merchantProduct-context';

import useModalControl from 'src/components/hooks/useModalControl';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius: '5px',
    padding: '5px 15px',
    width: '150px',
    '& .edit': {
      borderTop: '1px solid #FAFAFA',
      paddingTop: '10px',
      fontSize: '12.64px',
      lineHeight: '14px',
      color: '#737373',
      cursor: 'pointer',
    },
    '& .delete': {
      paddingTop: '10px',
      fontSize: '12.64px',
      lineHeight: '14px',
      cursor: 'pointer',
      '& .MuiListItemText-primary': {
        color: 'red',
      },
    },
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const ProductTable: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { data, loading } = useContext(MerchantProductContext);
  const [state, setState] = useModalControl();
  const [isSelectedProduct, setIsSelectedProduct] = useState(null);

  if (loading) return <Typography>Loading...</Typography>;

  const handleOpenDeleteModal = () => {
    setAnchorEl(null);
    setState({ ...state, modal: 'deleteProductModal', id: isSelectedProduct });
  };

  const handleEditProduct = () => {
    setState({ ...state, modal: 'editProductModal' });
    setAnchorEl(null);
  };

  const handleProductClick = (id: string | number) => {
    setIsSelectedProduct(id);
  };

  const handlePopeverOpen = (event: any, id: string | number) => {
    event.stopPropagation();
    setIsSelectedProduct(id);
    setAnchorEl(event.currentTarget);
  };

  const handlePopeverClose = () => {
    setAnchorEl(null);
    setIsSelectedProduct(null);
  };

  return (
    <Box className={classes.root}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body2">#Product ID</Typography>
              </TableCell>
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
              data.map((product: IProps) => (
                <React.Fragment key={product.number}>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body2">{product.number}</Typography>
                    </TableCell>
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
                        ₦
                        <NumberFormat
                          value={`${product.newPrice}`}
                          thousandSeparator={true}
                          decimalSeparator="."
                          decimalScale={2}
                          fixedDecimalScale={true}
                          displayType="text"
                        />
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
                      <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={() => handleProductClick(product.number)}
                      >
                        <MoreVertIcon
                          fontSize="small"
                          style={{ cursor: 'pointer' }}
                          aria-controls="customized-menu"
                          aria-haspopup="true"
                          onClick={(event) =>
                            handlePopeverOpen(event, product.number)
                          }
                        />
                        <StyledMenu
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handlePopeverClose}
                        >
                          <ListItemText
                            primary="Edit"
                            className="edit"
                            onClick={handleEditProduct}
                          />
                          <ListItemText
                            primary="Delete"
                            className="delete"
                            onClick={handleOpenDeleteModal}
                          />
                        </StyledMenu>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
