import React from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from 'src/store';

import ProductTable from 'src/components/AppLayout/Merchant/Product/ProductTable';

import Layout from 'src/components/SharedLayout/Layout';
import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';
import AddProduct from 'src/components/SharedLayout/AddProduct';

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      margin: '2em 0px',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 4%)',
    },
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: '#FFF',
      },
      '& .MuiSvgIcon-root': {
        marginRight: '.3em',
        '& > *': {
          color: '#FFF',
        },
      },
    },
  },
  filter: {
    padding: '.4em 2em',
  },
});

const Product = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

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
          <Grid container style={{ padding: '1em 0px' }}>
            <Grid item sm={12}>
              <Typography variant="subtitle1">Products</Typography>
            </Grid>
          </Grid>
          <ProductTable />
        </Paper>
      </Box>
      <AddProduct />
    </Layout>
  );
};

export default observer(Product);
