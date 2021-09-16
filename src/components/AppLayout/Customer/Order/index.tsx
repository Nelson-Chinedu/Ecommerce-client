import { FunctionComponent } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Button from 'src/components/SharedLayout/Button';
import CustomerLayout from 'src/components/SharedLayout/CustomerLayout';

import { customerOrders } from 'src/components/constant/orders';

import { useStyles } from 'src/components/AppLayout/Customer/Order/styled.order';

const Order: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <CustomerLayout>
      <Paper className={classes.main}>
        <Typography variant="h6">Orders</Typography>
        <Divider />
        {customerOrders.map((order, index) => (
          <Box key={index} style={{ margin: '1.5em 2em 0px' }}>
            <Grid
              container
              justify="flex-start"
              alignItems="flex-start"
              style={{
                border: '1px solid #ededed',
                padding: '1em 1em',
              }}
            >
              <Grid item sm={2}>
                <Image
                  src={order.productImage}
                  width={120}
                  height={120}
                  objectFit="cover"
                  alt="Product preview"
                />
              </Grid>
              <Grid item sm={8}>
                <Box mb={2} className={classes.orderTopInfo}>
                  <Typography>{order.productDescription}</Typography>
                  <Typography variant="body2">{order.OrderNumber}</Typography>
                </Box>
                <Box className={classes.orderBottomInfo}>
                  <Typography component="span" variant="body2">
                    {order.status}
                  </Typography>
                  <Typography variant="subtitle2">{order.OrderDate}</Typography>
                </Box>
              </Grid>
              <Grid item sm={2}>
                <Button
                  variant="text"
                  fullWidth
                  disableElevation={true}
                  color="default"
                >
                  See Details
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Paper>
    </CustomerLayout>
  );
};

export default Order;
