import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NumberFormat from 'react-number-format';
import Image from 'next/image';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Information from 'src/components/AppLayout/Customer/Order/Information';
import CancelOrderModal from 'src/components/AppLayout/Customer/Order/CancelOrder';
import { useStyles } from 'src/components/AppLayout/Customer/Order/styled.order';

import CustomerLayout from 'src/components/SharedLayout/CustomerLayout';
import Button from 'src/components/SharedLayout/Button';
import { showDate } from 'src/components/SharedLayout/Date';

import { GET_PREVIEW_ORDER } from 'src/queries';

import useModalControl from 'src/components/hooks/useModalControl';

const Preview: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const {
    query: { id },
  }: any = useRouter();
  const router = useRouter();
  const [state, setState] = useModalControl();

  const [isOrderId, setIsOrderId] = useState<string>('');

  const { loading, data } = useQuery(GET_PREVIEW_ORDER, {
    variables: { productId: isOrderId },
  });

  useEffect(() => {
    const getOrderId = () => {
      setIsOrderId(id);
    };
    getOrderId();
  }, [id]);

  const handleBack = () => {
    router.back();
  };

  const handleCancelOrder = (id: string | number) => {
    console.log(id);
    setState({ ...state, modal: 'clientCancelOrderModal', id: orderId });
  };

  const handleBackHome = () => {
    router.push('/app/c');
  };

  if (loading) return <Typography>Loading...</Typography>;

  if (data.client.previewOrder === null) {
    return (
      <Box className={classes.lost}>
        <Image
          src="/image/lost.svg"
          width={150}
          height={150}
          alt="lost in planet"
        />
        <Typography variant="subtitle1">
          Ooppss, you seem to be lost!!
        </Typography>
        <Grid container alignItems="center" justify="center">
          <Grid item sm={3}>
            <Button
              variant="contained"
              fullWidth
              disableElevation
              color="secondary"
              onClick={handleBackHome}
            >
              Go back home
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  const {
    client: {
      previewOrder: {
        status,
        orderId,
        createdAt,
        product: { name, newPrice, oldPrice, imageUrl },
      },
    },
  } = data;

  return (
    <CustomerLayout>
      <Paper className={classes.main}>
        <Grid
          container
          alignItems="center"
          justify="flex-start"
          className={classes.back}
        >
          <Grid item>
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6">Order Details</Typography>
          </Grid>
        </Grid>
        <Divider />
        {loading ? (
          <Typography>loading</Typography>
        ) : (
          <Box className={classes.wrapper}>
            <Grid container>
              <Grid item>
                <Typography variant="subtitle2">Order Nº {orderId}</Typography>
                <Typography variant="body2">1 items</Typography>
                <Typography variant="body2">
                  Placed on {showDate(createdAt)}
                </Typography>
                <Typography variant="body2">
                  Total: ₦{' '}
                  <NumberFormat
                    value={`${newPrice}`}
                    thousandSeparator={true}
                    displayType="text"
                  />
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2" className={classes.item}>
              ITEMS IN YOUR ORDER
            </Typography>
            <Box className={classes.orderPreview}>
              <Grid
                container
                justify="space-between"
                alignItems="flex-start"
                spacing={1}
              >
                <Grid item>
                  <Typography
                    variant="body2"
                    component="span"
                    className={classes.status}
                  >
                    {status}
                  </Typography>
                  <Typography variant="body2">
                    On {showDate(createdAt)}
                  </Typography>
                  <Grid
                    container
                    spacing={1}
                    className={classes.productWrapper}
                  >
                    <Grid item sm={4}>
                      <Image
                        src={imageUrl ? imageUrl : '/image/img.jpeg'}
                        width={150}
                        height={150}
                        alt="product preview"
                        objectFit="fill"
                      />
                    </Grid>
                    <Grid item sm={8}>
                      <Typography variant="body2">{name}</Typography>
                      <Typography variant="body2">QTY: 1</Typography>
                      <Typography variant="body2">
                        ₦{' '}
                        <NumberFormat
                          value={`${newPrice}`}
                          thousandSeparator={true}
                          displayType="text"
                        />{' '}
                        <del>
                          ₦
                          <NumberFormat
                            value={`${oldPrice}`}
                            thousandSeparator={true}
                            displayType="text"
                          />
                        </del>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {status && status === 'processing' && (
                  <Grid item className={classes.statusHistory}>
                    <Button
                      variant="contained"
                      fullWidth
                      disableElevation={true}
                      color="default"
                      onClick={() => handleCancelOrder(orderId)}
                    >
                      Cancel Order
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Box>
            <Grid container spacing={5}>
              <Grid item sm={6}>
                <Information>
                  <Typography variant="subtitle2" className={classes.header}>
                    PAYMENT INFORMATION
                  </Typography>
                  <Divider />
                  <Box className={classes.descWrapper}>
                    <Typography variant="subtitle2">Payment method</Typography>
                    <Typography variant="body2">Card</Typography>
                  </Box>
                  <Box className={classes.descWrapper}>
                    <Typography variant="subtitle2">Payment Details</Typography>
                    <Typography variant="body2">
                      Items total: ₦{' '}
                      <NumberFormat
                        value={`${newPrice}`}
                        thousandSeparator={true}
                        displayType="text"
                      />
                    </Typography>
                    <Typography variant="body2">Shipping Fees: Free</Typography>
                    <Typography variant="body2">
                      Total: ₦{' '}
                      <NumberFormat
                        value={`${newPrice}`}
                        thousandSeparator={true}
                        displayType="text"
                      />
                    </Typography>
                  </Box>
                </Information>
              </Grid>
              <Grid item sm={6}>
                <Information>
                  <Typography variant="subtitle2" className={classes.header}>
                    DELIVERY INFORMATION
                  </Typography>
                  <Divider />
                  <Box className={classes.descWrapper}>
                    <Typography variant="subtitle2">Delivery Method</Typography>
                    <Typography variant="body2">
                      Delivery at a Pick-up station
                    </Typography>
                  </Box>
                  <Box className={classes.descWrapper}>
                    <Typography variant="subtitle2">
                      Pick-up station Address
                    </Typography>
                    <Typography variant="body2">
                      122 some dummy address
                    </Typography>
                    <Typography variant="body2">dummy location</Typography>
                    <Typography variant="body2">dummy state</Typography>
                  </Box>
                  <Box className={classes.descWrapper}>
                    <Typography variant="subtitle2">Opening Hours</Typography>
                    <Typography variant="body2">
                      Mon-Fri 8AM-5PM; Sat 10AM-4PM
                    </Typography>
                    <Link href="#">See Location</Link>
                  </Box>
                </Information>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
      <CancelOrderModal />
    </CustomerLayout>
  );
};

export default observer(Preview);
