import React, { useContext, FunctionComponent } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import ProductTable from 'src/components/AppLayout/Merchant/Product/ProductTable';
import { useStyles } from 'src/components/AppLayout/Merchant/Product/styled.product';
import AddProduct from 'src/components/AppLayout/Merchant/Product/AddProduct';
import EditProduct from 'src/components/AppLayout/Merchant/Product/EditProduct';
import DeleteProduct from 'src/components/AppLayout/Merchant/Product/DeleteProduct';

import Layout from 'src/components/SharedLayout/Layout';
import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';

import { MerchantProductContext } from 'src/components/context/merchantProduct-context';
import { SettingContext } from 'src/components/context/merchantSetting-context';

import useModalControl from 'src/components/hooks/useModalControl';

const Product: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { data } = useContext(MerchantProductContext);
  const { firstname, lastname, phoneNumber, storeName } =
    useContext(SettingContext);
  const [state, setState] = useModalControl();

  const handleOpen = () => {
    setState({ ...state, modal: 'addProductModal' });
  };

  return (
    <Layout>
      <Box className={classes.root}>
        {data.length === 0 ? (
          <Box className={classes.emptyProduct}>
            <Image
              src="/image/emptyProduct.svg"
              width={200}
              height={200}
              alt="product illustration"
            />
            <Typography variant="subtitle2">No product added yet</Typography>
            {/* {!firstname || !lastname || !phoneNumber || !storeName ? null : ( */}
            <Grid container alignItems="center" justify="center">
              <Grid item sm={3}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disableElevation={true}
                  disabled={
                    !firstname || !lastname || !phoneNumber || !storeName
                  }
                  onClick={handleOpen}
                >
                  <AddCircleOutlineOutlinedIcon fontSize="small" /> Add Product
                </Button>
              </Grid>
            </Grid>
            {/* // )} */}
          </Box>
        ) : (
          <>
            <Paper className={classes.filter}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item sm={7}>
                  <Grid container spacing={2}>
                    <Grid item sm={3}>
                      <TextInput
                        select
                        size="small"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        label="Category"
                      >
                        <MenuItem value="Category">Category</MenuItem>
                      </TextInput>
                    </Grid>
                    <Grid item sm={3}>
                      <TextInput
                        select
                        size="small"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        label="Status"
                      >
                        <MenuItem value="Status">Status</MenuItem>
                      </TextInput>
                    </Grid>
                    <Grid item sm={3}>
                      <TextInput
                        select
                        size="small"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        label="Price"
                      >
                        <MenuItem value="Price">Price</MenuItem>
                      </TextInput>
                    </Grid>
                    <Grid item sm={3}>
                      <TextInput
                        select
                        size="small"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        label="Date"
                      >
                        <MenuItem value="Date">Date</MenuItem>
                      </TextInput>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disableElevation={true}
                    onClick={handleOpen}
                  >
                    <AddCircleOutlineOutlinedIcon fontSize="small" /> Add
                    Product
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <Paper style={{ padding: '1em' }}>
              <Grid container style={{ padding: '1em 0px' }}>
                <Grid item sm={12}>
                  <Typography variant="subtitle1">Products</Typography>
                </Grid>
              </Grid>
              <ProductTable />
            </Paper>
          </>
        )}
      </Box>
      <AddProduct />
      <EditProduct />
      <DeleteProduct />
    </Layout>
  );
};

export default Product;
