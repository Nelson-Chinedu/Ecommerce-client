import React, { FunctionComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useQuery } from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { GET_MERCHANT_ORDER } from 'src/queries';

const colors = ['#26CCB7', '#FFD422', '#FF5967'];

const useStyles = makeStyles({
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

const Stats: FunctionComponent<{}> = () => {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_MERCHANT_ORDER);
  if (loading) {
    return <p>loading</p>;
  }

  const {
    client: {
      getMerchantOrders: { orders },
    },
  } = data;

  const AllOrders = orders;

  const NewOrder = AllOrders.filter(
    (order: { status: string }) => order.status === 'processing'
  );
  const CancelledOrder = AllOrders.filter(
    (order: { status: string }) => order.status === 'cancelled'
  );
  const DeliveredOrder = AllOrders.filter(
    (order: { status: string }) => order.status === 'delivered'
  );

  const stat = [
    {
      name: 'Delivered',
      value: DeliveredOrder.length,
    },
    {
      name: 'New Order',
      value: NewOrder.length,
    },
    {
      name: 'Cancelled Order',
      value: CancelledOrder.length,
    },
  ];

  return (
    <Paper style={{ height: '350px', padding: '3em 0px' }}>
      <ResponsiveContainer>
        <PieChart width={320} height={100} margin={{ top: 0, bottom: 0 }}>
          <Pie
            data={stat}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="40%"
            innerRadius={60}
            outerRadius={100}
            fill="#82ca9d"
          >
            {colors.map((color, index) => (
              <Cell key={index} fill={color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        style={{ textAlign: 'center' }}
      >
        <Grid item sm={4}>
          <Typography variant="body2">
            <span className={classes.pending} /> New Order
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="body2">
            <span className={classes.delivered} /> Delivered
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="body2">
            <span className={classes.canceled} /> Canceled
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Stats;
