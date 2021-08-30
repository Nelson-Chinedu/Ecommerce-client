import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Notification from 'src/components/AppLayout/Merchant/Setting/Notification';
import Profile from 'src/components/AppLayout/Merchant/Setting/Profile';
import ChangePassword from 'src/components/AppLayout/Merchant/Setting/ChangePassword';

import Layout from 'src/components/SharedLayout/Layout';
import Button from 'src/components/SharedLayout/Button';

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      padding: '2em',
      marginTop: '2em',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 4%)',
    },
    '& .MuiTypography-body2': {
      fontSize: '12px',
    },
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: '#FFF',
      },
    },
  },
});

const Setting: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Box className={classes.root}>
        <Paper>
          <Grid container justify="space-between" spacing={8}>
            <Grid item sm={6}>
              <>
                <ChangePassword />
              </>
              <>
                <Notification />
              </>
            </Grid>
            <Grid item sm={6}>
              <Profile />
            </Grid>
          </Grid>
          <Grid container justify="flex-end" alignItems="center">
            <Grid item sm={2}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation={true}
                fullWidth
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Setting;
