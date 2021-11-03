import React, { useState, ChangeEvent, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: 'red !important',
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
      color: '#fff !important',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      background: '#606979',
    },
    checked: {},
  })
)(Switch);

const Notification: FunctionComponent<{}> = () => {
  const [notification, setNotification] = useState({
    orderConfirmation: true,
    orderStatus: false,
    orderDelivered: true,
    emailNotification: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNotification({
      ...notification,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box style={{ margin: '1em 0px' }}>
      <Box
        style={{
          margin: '1em 0px',
          border: '1px solid #e5e5ea',
          padding: '1em',
          borderRadius: '5px',
        }}
      >
        <Box
          style={{
            border: '1px solid #ceced0',
            borderRadius: '5px',
            padding: '.8em 1em',
          }}
        >
          <Grid container justify="space-between" alignItems="flex-start">
            <Grid item sm={10}>
              <Typography variant="subtitle1">Order Confirmation</Typography>
              <Typography variant="body2">
                You will be notified when customer order any product
              </Typography>
            </Grid>
            <Grid item sm={2} style={{ display: 'contents' }}>
              <AntSwitch
                checked={notification.orderConfirmation}
                onChange={handleChange}
                name="orderConfirmation"
                color="secondary"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          style={{
            border: '1px solid #ceced0',
            borderRadius: '5px',
            padding: '.8em 1em',
          }}
        >
          <Grid container justify="space-between" alignItems="flex-start">
            <Grid item sm={10}>
              <Typography variant="subtitle1">Order Status Changed</Typography>
              <Typography variant="body2">
                You will be notified when customer make changes to the order
              </Typography>
            </Grid>
            <Grid item sm={2} style={{ display: 'contents' }}>
              <AntSwitch
                checked={notification.orderStatus}
                onChange={handleChange}
                name="orderStatus"
                color="secondary"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          style={{
            border: '1px solid #ceced0',
            borderRadius: '5px',
            padding: '.8em 1em',
          }}
        >
          <Grid container justify="space-between" alignItems="flex-start">
            <Grid item sm={10}>
              <Typography variant="subtitle1">Order Delivered</Typography>
              <Typography variant="body2">
                You will be notified once the order is delivered
              </Typography>
            </Grid>
            <Grid item sm={2} style={{ display: 'contents' }}>
              <AntSwitch
                checked={notification.orderDelivered}
                onChange={handleChange}
                name="orderDelivered"
                color="secondary"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          style={{
            border: '1px solid #ceced0',
            borderRadius: '5px',
            padding: '.8em 1em',
          }}
        >
          <Grid container justify="space-between" alignItems="flex-start">
            <Grid item sm={10}>
              <Typography variant="subtitle1">Email Notification</Typography>
              <Typography variant="body2">
                Turn on email notification to get updates through email
              </Typography>
            </Grid>
            <Grid item sm={2} style={{ display: 'contents' }}>
              <AntSwitch
                checked={notification.emailNotification}
                onChange={handleChange}
                name="emailNotification"
                color="secondary"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Notification;
