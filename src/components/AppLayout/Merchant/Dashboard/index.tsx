import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Revenue from 'src/components/AppLayout/Merchant/Dashboard/Revenue';
import TopChart from 'src/components/AppLayout/Merchant/Dashboard/TopChart';
import MiniProduct from 'src/components/AppLayout/Merchant/Dashboard/MiniProduct';
import Stats from 'src/components/AppLayout/Merchant/Dashboard/Stats';
import RecentOrders from 'src/components/AppLayout/Merchant/Dashboard/RecentOrders';

import Layout from 'src/components/SharedLayout/Layout';

const useStyles = makeStyles({
  root: {
    '& .MuiTableHead-root': {
      background: '#007AFF',
      '& .MuiTableCell-head': {
        '& > *': {
          color: 'white',
        },
      },
    },
    '& .MuiPaper-root': {
      padding: '1em 1em',
      height: '150px',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 4%)',
    },
  },
  delivered: {
    background: '#26CCB7',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
  pending: {
    background: '#FFD422',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
  canceled: {
    background: '#FF5967',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
});

const Dashboard: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.root}>
        <Box style={{ margin: '2em 0px' }}>
          <TopChart />
        </Box>
        <Grid container spacing={4}>
          <Grid item sm={8}>
            <Revenue />
          </Grid>
          <Grid item sm={4}>
            <MiniProduct />
          </Grid>
        </Grid>
        <Grid container spacing={4} style={{ marginTop: '3em' }}>
          <Grid item sm={4}>
            <Stats />
          </Grid>
          <Grid item sm={8}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;
