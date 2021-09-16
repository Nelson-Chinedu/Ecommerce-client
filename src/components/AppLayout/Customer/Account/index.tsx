import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';
import CustomerLayout from 'src/components/SharedLayout/CustomerLayout';

import { useStyles } from 'src/components/AppLayout/Customer/Account/styled.account';

const Account: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <CustomerLayout>
      <Paper className={classes.main}>
        <Typography variant="h6">Account Overview</Typography>
        <Divider />
        <Box className={classes.accountContainer}>
          <Box
            style={{
              position: 'relative',
              width: '20%',
              margin: 'auto',
            }}
          >
            <Avatar
              src="/image/man6.jpg"
              alt="profile picture"
              className={classes.large}
            />
            <Box className={classes.upload}>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  disableRipple={true}
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCameraIcon fontSize="small" />
                </IconButton>
              </label>
            </Box>
          </Box>
          <Box className={classes.accountDetails}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="text"
                  color="secondary"
                  size="small"
                  label="Firstname"
                />
              </Grid>
              <Grid item sm={6}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="text"
                  color="secondary"
                  size="small"
                  label="Lastname"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="email"
                  color="secondary"
                  size="small"
                  label="Email Address"
                />
              </Grid>
              <Grid item sm={6}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="tel"
                  color="secondary"
                  size="small"
                  label="Phone Number"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextInput
                  select
                  variant="outlined"
                  fullWidth
                  type="text"
                  color="secondary"
                  size="small"
                  label="Gender"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </TextInput>
              </Grid>
              <Grid item sm={6}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="date"
                  color="secondary"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextInput
                  multiline
                  variant="outlined"
                  fullWidth
                  type="text"
                  color="secondary"
                  size="small"
                  rows={5}
                  label="Address"
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              fullWidth
            >
              Save
            </Button>
          </Box>
        </Box>
      </Paper>
    </CustomerLayout>
  );
};

export default Account;
