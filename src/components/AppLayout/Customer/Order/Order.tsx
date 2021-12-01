import { FunctionComponent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from 'src/components/SharedLayout/Button';
import { showDate } from 'src/components/SharedLayout/Date';

import { useStyles } from 'src/components/AppLayout/Customer/Order/styled.order';

import { GET_CUSTOMER_ORDER } from 'src/queries';

type Props = {
  status: string;
  createdAt: string;
  orderId: number;
  product: {
    imageUrl: string;
    name: string;
  };
};

const Order: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const router = useRouter();
  const { loading, data } = useQuery(GET_CUSTOMER_ORDER);

  if (loading) return <Typography>Loading...</Typography>;

  const {
    client: {
      getCustomerOrders: { orders },
    },
  } = data;

  const handleOrderPreview = (id: number) => {
    router.push(`order/detail/${id}`);
  };

  return (
    <>
      {orders.length > 0 ? (
        orders.map((order: Props) => (
          <Box key={order.orderId} className={classes.orderWrapper}>
            <Grid
              container
              justify="flex-start"
              alignItems="flex-start"
              className={classes.orderContainer}
            >
              <Grid item sm={2}>
                <Image
                  src={
                    order.product.imageUrl
                      ? order.product.imageUrl
                      : '/image/img.jpeg'
                  }
                  width={120}
                  height={120}
                  objectFit="fill"
                  alt="Product preview"
                />
              </Grid>
              <Grid item sm={8}>
                <Box mb={2} className={classes.orderTopInfo}>
                  <Typography>{order.product.name}</Typography>
                  <Typography variant="body2">{` Order No #${order.orderId}`}</Typography>
                </Box>
                <Box className={classes.orderBottomInfo}>
                  <Typography component="span" variant="body2">
                    {order.status}
                  </Typography>
                  <Typography variant="subtitle2">
                    On {showDate(order.createdAt)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={2}>
                <Button
                  variant="text"
                  fullWidth
                  disableElevation={true}
                  color="default"
                  onClick={() => handleOrderPreview(order.orderId)}
                >
                  See Details
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))
      ) : (
        <Box className={classes.emptyOrder}>
          <Typography>No order found</Typography>
        </Box>
      )}
    </>
  );
};

export default Order;
