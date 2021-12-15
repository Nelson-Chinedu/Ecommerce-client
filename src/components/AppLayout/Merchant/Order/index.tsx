import React, { FunctionComponent, useContext } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import OrderTable from 'src/components/AppLayout/Merchant/Order/OrderTable';
import AddProduct from 'src/components/AppLayout/Merchant/Product/AddProduct';
import UpdateOrder from 'src/components/AppLayout/Merchant/Order/UpdateOrder';
import { useStyles } from 'src/components/AppLayout/Merchant/Order/styled.order';

import Layout from 'src/components/SharedLayout/Layout';
import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';

import { MerchantOrderContext } from 'src/components/context/merchantOrder-context';
import { SettingContext } from 'src/components/context/merchantSetting-context';

import useModalControl from 'src/components/hooks/useModalControl';

const Order: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [state, setState] = useModalControl();
  const { firstname, lastname, phoneNumber, storeName } =
    useContext(SettingContext);
  const { loading, data } = useContext(MerchantOrderContext);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  const handleOpen = () => {
    setState({ ...state, modal: 'addProductModal' });
  };

  return (
    <Layout>
      <Box className={classes.root}>
        {data && data.length === 0 ? (
          <Box className={classes.emptyOrder}>
            <Image
              src="/image/emptyOrder.svg"
              width={150}
              height={150}
              alt="product illustration"
            />
            <Typography variant="subtitle2">
              Hang on tight, No order yet !!!
            </Typography>
            <Grid container alignItems="center" justify="center">
              <Grid item sm={3}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disableElevation={true}
                  onClick={handleOpen}
                  disabled={
                    !firstname || !lastname || !phoneNumber || !storeName
                  }
                >
                  <AddCircleOutlineOutlinedIcon fontSize="small" /> Add Product
                </Button>
              </Grid>
            </Grid>
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
                  <Typography variant="subtitle1">All Orders</Typography>
                </Grid>
              </Grid>
              <OrderTable />
            </Paper>
          </>
        )}
      </Box>
      <AddProduct />
      <UpdateOrder />
    </Layout>
  );
};

export default Order;
