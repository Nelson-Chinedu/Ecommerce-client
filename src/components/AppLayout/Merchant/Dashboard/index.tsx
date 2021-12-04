import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Revenue from 'src/components/AppLayout/Merchant/Dashboard/Revenue';
import TopStat from 'src/components/AppLayout/Merchant/Dashboard/TopStat';
import MiniProduct from 'src/components/AppLayout/Merchant/Dashboard/MiniProduct';
import Stats from 'src/components/AppLayout/Merchant/Dashboard/Stats';
import RecentOrders from 'src/components/AppLayout/Merchant/Dashboard/RecentOrders';
import { useStyles } from 'src/components/AppLayout/Merchant/Dashboard/styled.dashboard';

import Layout from 'src/components/SharedLayout/Layout';

const Dashboard: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.root}>
        <Box className={classes.topChart}>
          <TopStat />
        </Box>
        <Grid container spacing={4}>
          <Grid item sm={8}>
            <Revenue />
          </Grid>
          <Grid item sm={4}>
            <MiniProduct />
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.bottomStat}>
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
