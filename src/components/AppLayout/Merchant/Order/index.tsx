import React, { FunctionComponent, useContext } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import { useStore } from 'src/store';

import OrderTable from 'src/components/AppLayout/Merchant/Order/OrderTable';

import Layout from 'src/components/SharedLayout/Layout';
import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';
import AddProduct from 'src/components/SharedLayout/AddProduct';
import { useStyles } from 'src/components/AppLayout/Merchant/Order/styled.order';
import { MerchantOrderContext } from 'src/components/context/merchantOrder-context';

const Order: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const { loading, data } = useContext(MerchantOrderContext);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  const handleOpen = () => {
    uiStore.toggleModalVisibility();
  };

  return (
    <Layout>
      <Box className={classes.root}>
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
                <AddCircleOutlineOutlinedIcon fontSize="small" /> Add Product
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ padding: '1em' }}>
          {data && data.length === 0 ? (
            <Box className={classes.emptyState}>
              <Image
                src="/image/emptyOrder.svg"
                width={100}
                height={100}
                alt=""
              />
              <Typography>Hang on tight, No order yet !!!</Typography>
            </Box>
          ) : (
            <>
              <Grid container style={{ padding: '1em 0px' }}>
                <Grid item sm={12}>
                  <Typography variant="subtitle1">All Orders</Typography>
                </Grid>
              </Grid>
              <OrderTable />
            </>
          )}
        </Paper>
      </Box>
      <AddProduct />
    </Layout>
  );
};

export default observer(Order);
