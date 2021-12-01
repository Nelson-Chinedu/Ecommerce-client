import { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CustomerLayout from 'src/components/SharedLayout/CustomerLayout';

import Order from 'src/components/AppLayout/Customer/Order/Order';
import { useStyles } from 'src/components/AppLayout/Customer/Order/styled.order';

const Index: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <CustomerLayout>
      <Paper className={classes.main}>
        <Typography variant="h6">Orders</Typography>
        <Divider />
        <Order />
      </Paper>
    </CustomerLayout>
  );
};

export default Index;
