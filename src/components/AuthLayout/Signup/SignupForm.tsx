import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import RightArrow from '@material-ui/icons/ArrowForwardOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';

import { useStore } from 'src/store';

import { useStyles } from 'src/components/AuthLayout/Signup/styled.signup';

const SignupForm: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const handleTogglePassword = () => {
    uiStore.togglePasswordVisibilty();
  }

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
                    {uiStore.passwordVisibilty ? <Visibility /> : <VisibilityOff />}
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
        <Grid item sm={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Checkbox id="remember" />
            </Grid>
            <Grid item>
              <Typography
                component="label"
                htmlFor="remember"
                variant="subtitle2"
              >
                Agree with our privacy policy and{' '}
                <span
                  style={{
                    color: 'red',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  terms &amp; conditions
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        className={classes.btnLogin}
        disableElevation={true}
        fullWidth={true}
      >
        SIGN UP <RightArrow fontSize="small" />
      </Button>
    </>
  );
};

export default observer(SignupForm);
