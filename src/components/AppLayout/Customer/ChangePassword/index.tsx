import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';
import CustomerLayout from 'src/components/SharedLayout/CustomerLayout';

import { useStyles } from 'src/components/AppLayout/Customer/ChangePassword/styled.changePassword';

const ChangePassword: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <CustomerLayout>
      <Paper className={classes.main}>
        <Typography variant="h6">Change Password</Typography>
        <Divider />
        <Box className={classes.accountContainer}>
          <Box className={classes.accountDetails}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="password"
                  color="secondary"
                  size="small"
                  label="Current Password"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="password"
                  color="secondary"
                  size="small"
                  label="New Password"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="password"
                  color="secondary"
                  size="small"
                  label="Retype Password"
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              fullWidth
            >
              Change Password
            </Button>
          </Box>
        </Box>
      </Paper>
    </CustomerLayout>
  );
};

export default ChangePassword;
