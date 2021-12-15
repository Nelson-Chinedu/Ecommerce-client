import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { useQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';
import CustomerLayout from 'src/components/SharedLayout/CustomerLayout';

import { useStyles } from 'src/components/AppLayout/Customer/Account/styled.account';

import { GET_PROFILE, UPDATE_PROFILE } from 'src/queries';

import { useStore } from 'src/store';

interface IValues {
  firstname: string;
  lastname: string;
  gender: string;
  address: string;
  city: string;
  country: string;
  phoneNumber: number;
  emailAddress: string;
}

const validationSchema = yup.object().shape({
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  emailAddress: yup.string().email('Invalid email address'),
  phoneNumber: yup
    .number()
    .required('Required')
    .typeError('Enter a valid mobile number'),
  city: yup.string().required('Required'),
  country: yup.string().required('Required'),
  address: yup.string().required('Required'),
});

const Account: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const { loading, data: userProfile } = useQuery(GET_PROFILE);
  const [updateProfile, { loading: isLoading }] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: GET_PROFILE }],
  });

  if (loading) <Typography>loading...</Typography>;

  const _handleFormSubmit = async (values: IValues) => {
    try {
      const profile = await updateProfile({
        variables: {
          firstname: values.firstname,
          lastname: values.lastname,
          emailAddress: values.emailAddress,
          phoneNumber: values.phoneNumber,
          gender: values.gender,
          city: values.city,
          country: values.country,
          address: values.address,
        },
      });
      if (profile) {
        const {
          data: {
            client: {
              updateProfile: { message },
            },
          },
        } = profile;
        uiStore.showSnackbar = true;
        uiStore.serverMessage = message;
        uiStore.snackbarSeverity = 'success';
      }
    } catch (error) {
      uiStore.showSnackbar = true;
      uiStore.serverMessage = 'An error occured';
      uiStore.snackbarSeverity = 'error';
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: userProfile ? userProfile.client.getProfile.firstname : '',
      lastname: userProfile ? userProfile.client.getProfile.lastname : '',
      emailAddress: userProfile
        ? userProfile.client.getProfile.account.email
        : '',
      phoneNumber: userProfile ? userProfile.client.getProfile.phoneNumber : '',
      gender: userProfile ? userProfile.client.getProfile.gender : '',
      city: userProfile ? userProfile.client.getProfile.location.city : '',
      country: userProfile
        ? userProfile.client.getProfile.location.country
        : '',
      address: userProfile
        ? userProfile.client.getProfile.location.address
        : '',
    },
    onSubmit: _handleFormSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    values: {
      firstname,
      lastname,
      emailAddress,
      phoneNumber,
      gender,
      city,
      country,
      address,
    },
  } = formik;

  return (
    <CustomerLayout>
      <Paper className={classes.root}>
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
            <Avatar alt="profile picture" className={classes.large}></Avatar>
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
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.firstname && errors.firstname}
                  error={touched.firstname && Boolean(errors.firstname)}
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
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.lastname && errors.lastname}
                  error={touched.lastname && Boolean(errors.lastname)}
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
                  name="emailAddress"
                  value={emailAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.emailAddress && errors.emailAddress}
                  error={touched.emailAddress && Boolean(errors.emailAddress)}
                  disabled
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
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextInput
                  select
                  variant="outlined"
                  fullWidth
                  type="text"
                  color="secondary"
                  size="small"
                  label="Gender"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </TextInput>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="text"
                  color="secondary"
                  size="small"
                  label="Address"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.address && errors.address}
                  error={touched.address && Boolean(errors.address)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="tel"
                  color="secondary"
                  size="small"
                  label="City"
                  name="city"
                  value={city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.city && errors.city}
                  error={touched.city && Boolean(errors.city)}
                />
              </Grid>
              <Grid item sm={6}>
                <TextInput
                  variant="outlined"
                  fullWidth
                  type="tel"
                  color="secondary"
                  size="small"
                  label="Country"
                  name="country"
                  value={country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.country && errors.country}
                  error={touched.country && Boolean(errors.country)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              fullWidth
              disabled={
                !firstname ||
                !lastname ||
                !emailAddress ||
                !phoneNumber ||
                !city ||
                !country ||
                !address ||
                isSubmitting
              }
              onClick={handleSubmit}
            >
              {isSubmitting && isLoading ? (
                <CircularProgress size={20} />
              ) : (
                'Save'
              )}
            </Button>
          </Box>
        </Box>
      </Paper>
    </CustomerLayout>
  );
};

export default observer(Account);
