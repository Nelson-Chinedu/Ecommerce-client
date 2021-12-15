import React, { FunctionComponent } from 'react';
import router, { useRouter } from 'next/router';
import store from 'store';
import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';

import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';

import { useStore } from 'src/store';

import { useStyles } from 'src/components/AuthLayout/Signup/styled.signup';

import { SIGNUP } from 'src/queries';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
});

const SignupForm: FunctionComponent<{}> = () => {
  const [signup, { loading }] = useMutation(SIGNUP);
  const {
    query: { t: accountType },
  } = useRouter();
  const classes = useStyles();
  const { uiStore } = useStore();
  const handleTogglePassword = () => {
    uiStore.togglePasswordVisibilty();
  };

  const _handleFormSubmit = async () => {
    try {
      const newUser = await signup({
        variables: {
          signupEmail: formik.values.email,
          signupPassword: formik.values.password,
          signupAccountType: accountType,
        },
      });
      if (newUser) {
        const {
          data: {
            public: {
              signup: { status, message },
            },
          },
        } = newUser;
        if (status == '201' && message) {
          store.set('__cmsg', message);
          router.push('/confirm-email');
        }
      }
    } catch (error: any) {
      if (error.message === '"email" must be a valid email') {
        const stripError = error.message.replace(/"|'/g, '');
        formik.setFieldError('email', stripError);
      }
      if (error.message === 'Email address is invalid or already taken') {
        formik.setFieldError('email', error.message);
      }
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
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
    errors,
    values,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
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
            value={values.email}
            onChange={handleChange}
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
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
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
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        className={classes.btnLogin}
        disableElevation={true}
        fullWidth={true}
        disabled={isSubmitting}
        type="submit"
        onClick={handleSubmit}
      >
        {isSubmitting && loading ? <CircularProgress size={20} /> : 'Sign Up'}
      </Button>
    </form>
  );
};

export default observer(SignupForm);
