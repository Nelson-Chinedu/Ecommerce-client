import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/EditOutlined';
import CancelIcon from '@material-ui/icons/CancelOutlined';

import { useStyles } from 'src/components/MainLayout/Checkout/styled.checkout';

import { orders } from 'src/components/constant/orders';

const OrderPreview: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Box style={{ marginTop: '1em' }}>
      <Grid
        container
        justify="space-between"
        alignItems="flex-start"
        style={{ backgroundColor: '#f6f8fa', padding: '8px 12px' }}
      >
        <Grid item>
          <Typography variant="subtitle2">Product</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">Subtotal</Typography>
        </Grid>
      </Grid>
      {orders.map((order) => (
        <Grid container alignItems="center" style={{ marginTop: '1em' }}>
          <Grid item sm={3}>
            <Image src={order.img} alt="" width={80} height={80} />
          </Grid>
          <Grid item sm={6}>
            <Typography variant="subtitle2">{order.productName}</Typography>
          </Grid>
          <Grid item sm={3}>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              style={{ textAlign: 'right' }}
            >
              <Grid item sm={12} style={{ marginBottom: '.6em' }}>
                <EditIcon className={classes.edit} fontSize="small" />
                <CancelIcon
                  className={classes.cancel}
                  fontSize="small"
                  color="primary"
                />
              </Grid>
              <Grid item sm={12}>
                <Typography variant="subtitle2">{order.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid container style={{ marginTop: '1em' }}>
        <Grid item sm={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ padding: '1em 0px' }}
      >
        <Grid item>
          <Typography>Subtotal</Typography>
        </Grid>
        <Grid item>
          <Typography>$299</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ padding: '1em 0px' }}
      >
        <Grid item>
          <Typography>Shipping</Typography>
        </Grid>
        <Grid item>
          <Typography>Free</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ padding: '1em 0px' }}
      >
        <Grid item>
          <Typography>Total</Typography>
        </Grid>
        <Grid item>
          <Typography>$299</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderPreview;
