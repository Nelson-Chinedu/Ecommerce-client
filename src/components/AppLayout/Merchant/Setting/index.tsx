import React, { FunctionComponent, useContext } from 'react';
import { useRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Layout from 'src/components/SharedLayout/Layout';
import Button from 'src/components/SharedLayout/Button';

import { SettingContext } from 'src/components/context/merchantSetting-context';

import Notification from 'src/components/AppLayout/Merchant/Setting/Notification';
import OverviewGrid from 'src/components/AppLayout/Merchant/Setting/OverviewGrid';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiPaper-root': {
      padding: '2em',
      marginTop: '2em',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 4%)',
      height: '100vh',
    },
    '& .MuiTypography-body2': {
      fontSize: '12px',
    },
    '& .MuiButton-disableElevation': {
      '& .MuiButton-label': {
        color: theme.palette.secondary.main,
      },
      '&:hover': {
        background: '#ddecfd',
      },
    },
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: '#FFF',
      },
    },
    '& .MuiCircularProgress-svg': {
      '& > *': {
        color: 'white',
      },
    },
    '& .MuiTypography-body1': {
      fontWeight: 600,
      fontStyle: 'normal',
    },
    '& .MuiSvgIcon-root': {
      '& > *': {
        color: theme.palette.secondary.main,
      },
    },
    '& .MuiIconButton-root': {
      '&:hover': {
        background: '#ddecfd',
      },
    },
  },
  userDetail: {
    paddingLeft: '10px',
    paddingBottom: '5px',
    '&:nth-child(2)': {
      color: '#75757A',
    },
  },
}));

const Setting: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const router = useRouter();
  const { firstname, lastname, emailAddress, storeName, currency } =
    useContext(SettingContext);

  const handleEditDetails = () => {
    router.push('/app/m/setting/account/edit');
  };

  const handleEditStore = () => {
    router.push('/app/m/setting/store/edit');
  };

  return (
    <Layout>
      <Box className={classes.root}>
        <Paper>
          <Grid container>
            <Grid item sm={12}>
              <Typography variant="body1">Account overview</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <OverviewGrid
              cardTitle="Account Details"
              handleClick={handleEditDetails}
            >
              <Typography
                variant="subtitle1"
                className={classes.userDetail}
              >{`${firstname} ${lastname}`}</Typography>
              <Typography variant="body2" className={classes.userDetail}>
                {emailAddress}
              </Typography>
              <Box style={{ margin: '10px 0px' }}>
                <Button
                  fullWidth
                  variant="text"
                  color="inherit"
                  disableElevation
                  href="/app/m/setting/change-password"
                >
                  CHANGE PASSWORD
                </Button>
              </Box>
            </OverviewGrid>
            <OverviewGrid cardTitle="Store" handleClick={handleEditStore}>
              <Typography variant="subtitle1">{storeName}</Typography>
              <Typography variant="subtitle1">{currency}</Typography>
            </OverviewGrid>
          </Grid>
          <Notification />
        </Paper>
      </Box>
    </Layout>
  );
};

export default Setting;
