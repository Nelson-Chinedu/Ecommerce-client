import React, { FunctionComponent, useState } from 'react';
import { useMutation } from '@apollo/client';
import store from 'store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStore } from 'src/store';

import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';

import { useStyles } from 'src/components/AuthLayout/Login/styled.login';

import { SIGNIN } from 'src/queries';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
});

const LoginForm: FunctionComponent<{}> = () => {
  const { uiStore } = useStore();
  const classes = useStyles();
  const router = useRouter();
  const [serverError, setServerError] = useState('');
  const [signin, { loading }] = useMutation(SIGNIN);

  const handleTogglePassword = () => {
    uiStore.togglePasswordVisibilty();
  };

  const _handleFormSubmit = async () => {
    try {
      const user = await signin({
        variables: {
          signinEmail: formik.values.email,
          signinPassword: formik.values.password,
        },
      });
      if (user) {
        const {
          data: {
            public: {
              signin: { status, message, token, accountType, isLoggedin },
            },
          },
        } = user;
        uiStore.serverMessage = message;
        uiStore.snackbarSeverity = 'success';
        uiStore.showSnackbar = true;
        const path =
          accountType === 'c' && status === '200'
            ? '/app/c'
            : accountType === 'm' && status === '200'
            ? '/app/m/dashboard'
            : '/';
        store.set('__cnt', token);
        store.set('__clu', isLoggedin);
        store.set('__cat', accountType);
        router.push(path);
      }
    } catch (error: any) {
      // TODO: Checkout how to check/write a custom graphQL error
      if (error.message === 'Failed to fetch') {
        return setServerError('Server Error');
      }
      setServerError(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: _handleFormSubmit,
    validationSchema,
  });

  const {
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
    touched,
    values: { email, password },
  } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        {serverError && (
          <Box className={classes.serverError}>
            <Typography>{serverError}</Typography>
          </Box>
        )}
        <Grid container className={classes.inputWrapper}>
          <Grid item sm={12}>
            <TextInput
              label="Email address"
              variant="outlined"
              color="secondary"
              fullWidth
              size="small"
              type="email"
              name="email"
              value={email}
              onChange={(e: { target: { value: string } }) => {
                formik.setFieldValue('email', e.target.value);
                setServerError('');
              }}
              onBlur={handleBlur}
              helperText={touched.email && errors.email}
              error={touched.email && Boolean(errors.email)}
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
              name="password"
              value={password}
              onChange={(e: { target: { value: string } }) => {
                formik.setFieldValue('password', e.target.value);
                setServerError('');
              }}
              onBlur={handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" disableTypography={true}>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      size="small"
                    >
                      {uiStore.passwordVisibilty ? (
                        <Visibility fontSize="small" />
                      ) : (
                        <VisibilityOff fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText={touched.password && errors.password}
              error={touched.password && Boolean(errors.password)}
            />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-end"
          justify="flex-end"
          className={classes.forgetPassword}
        >
          <Grid item sm={12}>
            <Link href="/">
              <Typography variant="subtitle2" component="span">
                Forgot your password?
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnLogin}
          disableElevation={true}
          fullWidth={true}
          type="submit"
          onClick={handleSubmit}
        >
          {isSubmitting && loading ? <CircularProgress size={20} /> : 'Login'}
        </Button>
      </form>
    </>
  );
};

export default observer(LoginForm);
