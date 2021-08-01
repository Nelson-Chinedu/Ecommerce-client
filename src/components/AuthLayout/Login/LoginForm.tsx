import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import RightArrow from '@material-ui/icons/ArrowForwardOutlined';

import { useStore } from 'src/store';

import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';

import { useStyles } from 'src/components/AuthLayout/Login/styled.login';

const LoginForm: FunctionComponent<{}> = () => {
  const { uiStore } = useStore();
  const classes = useStyles();

  const handleTogglePassword = () => {
    uiStore.togglePasswordVisibilty();
  };

  return (
    <>
      <Grid container className={classes.inputWrapper}>
        <Grid item sm={12}>
          <TextInput
            label="Email address"
            variant="outlined"
            color="secondary"
            fullWidth
            size="small"
            type="email"
            autoFocus={true}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrapper}>
        <Grid item sm={12}>
          <TextInput
            label="Password"
            variant="outlined"
            color="secondary"
            fullWidth
            size="small"
            type={uiStore.passwordVisibilty ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" disableTypography={true}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePassword}
                    size="small"
                  >
                    {uiStore.passwordVisibilty ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        style={{ margin: '.8em 0px' }}
      >
        <Grid item sm={6}>
          <Grid container alignItems="center">
            <Grid item>
              <Checkbox id="remember" />
            </Grid>
            <Grid item>
              <Typography
                component="label"
                htmlFor="remember"
                variant="subtitle2"
              >
                Remember Me
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Link href="/">
            <Typography variant="subtitle2">Forgot your password?</Typography>
          </Link>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        className={classes.btnLogin}
        disableElevation={true}
        fullWidth={true}
      >
        LOG IN <RightArrow fontSize="small" />
      </Button>
    </>
  );
};

export default observer(LoginForm);
