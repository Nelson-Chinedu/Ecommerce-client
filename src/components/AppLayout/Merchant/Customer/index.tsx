import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import CustomerTable from 'src/components/AppLayout/Merchant/Customer/CustomerTable';
import { useStyles } from 'src/components/AppLayout/Merchant/Customer/styled.customer';

import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';
import Layout from 'src/components/SharedLayout/Layout';
import AddProduct from 'src/components/AppLayout/Merchant/Product/AddProduct';

import useModalControl from 'src/components/hooks/useModalControl';

const Customer: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [state, setState] = useModalControl();

  const handleOpen = () => {
    setState({ ...state, modal: 'addProductModal' });
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
          <Grid container style={{ padding: '1em 0px' }}>
            <Grid item sm={12}>
              <Typography variant="subtitle1">Customers</Typography>
            </Grid>
          </Grid>
          <CustomerTable />
        </Paper>
      </Box>
      <AddProduct />
    </Layout>
  );
};

export default observer(Customer);
