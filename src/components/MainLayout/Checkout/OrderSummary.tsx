import React, { FunctionComponent, useState } from 'react';
import { toJS } from 'mobx';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from '@apollo/client';
import NumberFormat from 'react-number-format';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from 'src/components/SharedLayout/Button';

import { useStyles } from 'src/components/MainLayout/Checkout/styled.checkout';

import { useStore } from 'src/store';
import { CHECKOUT_PAYMENT } from 'src/queries';

type Props = {
  title: string;
  value: string | number;
  variant: 'body2' | 'subtitle2';
  currenncy?: boolean;
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

const Summary: FunctionComponent<Props> = ({
  title,
  value,
  variant,
  currenncy,
}) => {
  return (
    <>
      <Grid container justify="space-between" alignItems="flex-start">
        <Grid item>
          <Typography variant={variant}>{title}</Typography>
        </Grid>
        <Grid item>
          {currenncy ? (
            <Typography variant={variant}>
              &#8358;
              <NumberFormat
                value={`₦${value}`}
                thousandSeparator={true}
                displayType="text"
              />
            </Typography>
          ) : (
            <Typography variant={variant}> {value}</Typography>
          )}
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

const OrderSummary: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const [loading, setLoading] = useState(false);
  const carts = toJS(uiStore.cartItems).flat();
  const productId = carts.map((cart: { itemId: number }) => cart.itemId);
  const merchantId = carts.map((cart: { mId: string }) => cart.mId);
  const [checkoutPayment, { loading: checkoutLoading }] =
    useMutation(CHECKOUT_PAYMENT);
  const handlePayment = async () => {
    setLoading(true);
    const data = await checkoutPayment({
      variables: {
        checkoutPayment: uiStore.productPrice,
        checkoutProductItems: productId,
        checkoutMerchantId: merchantId,
      },
    });

    if (data) {
      const {
        data: {
          client: {
            checkoutPayment: { token },
          },
        },
      } = data;
      if (!token) return;

      const stripe = await stripePromise;

      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: token,
        });

        if (result.error) {
          setLoading(false);
        }
      }
    }
  };
  return (
    <>
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
          value={`${uiStore.productPrice.toFixed(2)}`}
          currenncy={true}
        />
        <Summary variant="body2" title="Delivery Charges:" value="Free" />
        <Summary
          variant="subtitle2"
          title="Total:"
          value={`${uiStore.productPrice.toFixed(2)}`}
          currenncy={true}
        />
        <Grid container>
          <Grid item sm={12}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              disableElevation
              onClick={handlePayment}
            >
              {loading && checkoutLoading ? (
                <CircularProgress size={20} />
              ) : (
                'Continue to Checkout'
              )}
            </Button>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="body2" className={classes.secure}>
              &#128274; Transactions are 100% safe and secured
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OrderSummary;
