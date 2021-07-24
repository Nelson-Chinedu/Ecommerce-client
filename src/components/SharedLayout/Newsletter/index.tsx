import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MessageIcon from '@material-ui/icons/MailOutlined';
import InputAdorment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import RightArrowIcon from '@material-ui/icons/ArrowForwardOutlined';

import TextInput from 'src/components/SharedLayout/TextInput';

import { useStyles } from './styled.newsletter';

const Newsletter: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm={6}>
          <Grid container alignItems="center" spacing={4}>
            <Grid item className={classes.mailWrapper}>
              <MessageIcon className={classes.message} fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="h6">Join our Newsletter</Typography>
              <Typography variant="subtitle1">
                Subscribe to our newsletter and get 10% off your first purchase
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <TextInput
            variant="outlined"
            fullWidth
            size="small"
            color="secondary"
            type="email"
            label="Your email address"
            InputProps={{
              endAdornment: (
                <InputAdorment position="end">
                  <IconButton size="medium">
                    <RightArrowIcon />
                  </IconButton>
                </InputAdorment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Newsletter;
