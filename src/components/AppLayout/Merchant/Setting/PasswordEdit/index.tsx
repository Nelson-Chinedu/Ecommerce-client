import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import ChangePassword from 'src/components/AppLayout/Merchant/Setting/PasswordEdit/ChangePassword';

import Layout from 'src/components/SharedLayout/Layout';

const useStyles = makeStyles({
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
  },
});

const PasswordEdit: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.root}>
        <Paper>
          <ChangePassword />
        </Paper>
      </Box>
    </Layout>
  );
};

export default PasswordEdit;
