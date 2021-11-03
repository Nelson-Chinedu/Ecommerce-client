import React, { FunctionComponent } from 'react';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import * as yup from 'yup';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';
import CustomerLayout from 'src/components/SharedLayout/CustomerLayout';

import { useStyles } from 'src/components/AppLayout/Customer/ChangePassword/styled.changePassword';

import { CHANGE_PASSWORD } from 'src/queries';

import { useStore } from 'src/store';

interface IValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape({
  currentPassword: yup.string().required('Required'),
  newPassword: yup
    .string()
    .min(8, 'Password should be more than 8 characters')
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('newPassword'), null],
      'New password and confirm password don"t match'
    )
    .required('Required'),
});

const ChangePassword: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const router = useRouter();
  const { uiStore } = useStore();
  const [changePassword, { loading }] = useMutation(CHANGE_PASSWORD);

  const _handleChangePassword = async (values: IValues) => {
    try {
      const account = await changePassword({
        variables: {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        },
      });
      if (account) {
        const {
          data: {
            client: {
              changePassword: { message },
            },
          },
        } = account;
        uiStore.serverMessage = message;
        uiStore.snackbarSeverity = 'success';
        uiStore.showSnackbar = true;
        resetForm();
      }
    } catch (error: any) {
      if (error.message === 'Permission denied') {
        router.push('/auth/login');
        uiStore.showSnackbar = true;
        uiStore.serverMessage = error.message;
        uiStore.snackbarSeverity = 'error';
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: _handleChangePassword,
    validationSchema,
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    resetForm,
    isSubmitting,
    values: { currentPassword, newPassword, confirmPassword },
  } = formik;

  return (
    <CustomerLayout>
      <Paper className={classes.root}>
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
                  name="currentPassword"
                  value={currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.currentPassword && errors.currentPassword}
                  error={
                    touched.currentPassword && Boolean(errors.currentPassword)
                  }
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
                  name="newPassword"
                  value={newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.newPassword && errors.newPassword}
                  error={touched.newPassword && Boolean(errors.newPassword)}
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
                  label="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              fullWidth
              disabled={
                !currentPassword ||
                !newPassword ||
                !confirmPassword ||
                isSubmitting
              }
              onClick={handleSubmit}
            >
              {isSubmitting && loading ? (
                <CircularProgress size={20} />
              ) : (
                'Change Password'
              )}
            </Button>
          </Box>
        </Box>
      </Paper>
    </CustomerLayout>
  );
};

export default observer(ChangePassword);
