import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from 'src/store';

import { CHANGE_PASSWORD } from 'src/queries';

import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';

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

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
    border: '1px solid #e5e5ea',
    padding: '1em',
    borderRadius: '5px',
    '& .MuiGrid-container': {
      margin: '1em 0px',
    },
    '& .MuiCircularProgress-svg': {
      '& > *': {
        color: 'white',
      },
    },
  },
});

const ChangePassword: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const router = useRouter();
  const { uiStore } = useStore();
  const [changePassword, { loading }] = useMutation(CHANGE_PASSWORD);

  const handleBack = () => {
    router.back();
  };

  const _handleChangePassword = async () => {
    try {
      const account = await changePassword({
        variables: {
          currentPassword: formik.values.currentPassword,
          newPassword: formik.values.newPassword,
          confirmPassword: formik.values.confirmPassword,
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
        resetForm();
        uiStore.showSnackbar = true;
        uiStore.serverMessage = message;
        uiStore.snackbarSeverity = 'success';
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
    validationSchema,
    onSubmit: _handleChangePassword,
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    isSubmitting,
    touched,
    resetForm,
    values: { currentPassword, newPassword, confirmPassword },
  } = formik;

  return (
    <>
      <Grid container alignItems="center" justify="flex-start">
        <Grid item>
          <IconButton onClick={handleBack}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">Change Password</Typography>
        </Grid>
      </Grid>
      <Box className={classes.root} style={{ width: '50%', margin: 'auto' }}>
        <Grid container>
          <Grid item sm={12}>
            <TextInput
              label="Current Password"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="password"
              name="currentPassword"
              value={currentPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.currentPassword && errors.currentPassword}
              error={touched.currentPassword && Boolean(errors.currentPassword)}
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
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.newPassword && errors.newPassword}
              error={touched.newPassword && Boolean(errors.newPassword)}
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
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.confirmPassword && errors.confirmPassword}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <Button
              color="secondary"
              fullWidth
              disableElevation
              variant="contained"
              disabled={isSubmitting && loading}
              onClick={handleSubmit}
            >
              {isSubmitting && loading ? (
                <CircularProgress size={20} />
              ) : (
                'Save Changes'
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default observer(ChangePassword);
