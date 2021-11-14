import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Button from 'src/components/SharedLayout/Button';

import { useStyles } from 'src/components/MainLayout/Checkout/styled.checkout';

import { useStore } from 'src/store';

type Props = {
  title: string;
  value: string;
  variant: 'body2' | 'subtitle2';
};

const Summary: FunctionComponent<Props> = ({ title, value, variant }) => {
  return (
    <>
      <Grid container justify="space-between" alignItems="flex-start">
        <Grid item>
          <Typography variant={variant}>{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant={variant}>{value}</Typography>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

const OrderSummary: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  return (
    <Box className={classes.summary}>
      <Summary
        variant="subtitle2"
        title="Order Summary"
        value={`${uiStore.cartItems.length} ${
          uiStore.cartItems.length > 1 ? `items` : 'item'
        }`}
      />
      <Summary
        variant="body2"
        title="Subtotal:"
        value={`₦${uiStore.productPrice}`}
      />
      <Summary variant="body2" title="Delivery Charges:" value="Free" />
      <Summary
        variant="subtitle2"
        title="Total:"
        value={`₦${uiStore.productPrice}`}
      />
      <Grid container>
        <Grid item sm={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            disableElevation
          >
            Continue to Checkout
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="body2" className={classes.secure}>
            &#128274; Transactions are 100% safe and secured
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderSummary;
