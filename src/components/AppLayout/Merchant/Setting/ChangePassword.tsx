import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import TextInput from 'src/components/SharedLayout/TextInput';

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
    border: '1px solid #e5e5ea',
    padding: '1em',
    borderRadius: '5px',
    '& .MuiGrid-container': {
      margin: '1em 0px',
    },
  },
});

const ChangePassword: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle2">Change Password</Typography>
      <Box className={classes.root}>
        <Grid container>
          <Grid item sm={12}>
            <TextInput
              label="Current Password"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="password"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <TextInput
              label="New Password"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="password"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <TextInput
              label="Confirm Password"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="password"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChangePassword;
