import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import TextInput from 'src/components/SharedLayout/TextInput';

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
    '& .MuiGrid-container': {
      margin: '1em 0px',
    },
  },
});

const Profile: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle2">Edit Profile</Typography>
      <Box
        className={classes.root}
        style={{
          border: '1px solid #e5e5ea',
          padding: '1em',
          borderRadius: '5px',
          height: '92%',
        }}
      >
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <TextInput
              label="Firstname"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item sm={6}>
            <TextInput
              label="Lastname"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <TextInput
              label="Store Name"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
          <Grid item sm={6}>
            <TextInput
              label="Location"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <TextInput
              label="Currency"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <TextInput
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="email"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <TextInput
              label="Phone"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <TextInput
              multiline
              rows={6}
              label="Address"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
