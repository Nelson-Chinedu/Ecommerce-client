import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import TotalRevenue from 'src/components/AppLayout/Merchant/Dashboard/TopStat/TotalRevenue';
import TotalOrder from 'src/components/AppLayout/Merchant/Dashboard/TopStat/TotalOrder';
import TotalProduct from 'src/components/AppLayout/Merchant/Dashboard/TopStat/TotalProduct';
import TotalVisitor from 'src/components/AppLayout/Merchant/Dashboard/TopStat/TotalVisitor';

const TopStat: FunctionComponent<{}> = () => {
  return (
    <Grid
      container
      justify="space-between"
      alignItems="flex-start"
      spacing={4}
      style={{ height: '100px' }}
    >
      <Grid item sm={3}>
        <TotalRevenue />
      </Grid>
      <Grid item sm={3}>
        <TotalOrder />
      </Grid>
      <Grid item sm={3}>
        <TotalProduct />
      </Grid>
      <Grid item sm={3}>
        <TotalVisitor />
      </Grid>
    </Grid>
  );
};

export default TopStat;
