import React, { FunctionComponent, useEffect, useState } from 'react';
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
import Snackbar from 'src/components/SharedLayout/Snackbar';

import { useStyles } from 'src/components/AppLayout/Customer/Account/styled.account';

import { GET_PROFILE, UPDATE_PROFILE } from 'src/queries';

const validationSchema = yup.object().shape({
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  emailAddress: yup
    .string()
    .email('Invalid email address')
    .required('Required'),
  phoneNumber: yup
    .number()
    .required('Required')
    .typeError('Enter a valid mobile number'),
  gender: yup.string(),
  region: yup.string().required('Required'),
  city: yup.string().required('Required'),
  country: yup.string().required('Required'),
  address: yup.string().required('Required'),
});

const Account: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    gender: '',
    region: '',
    city: '',
    country: '',
    address: '',
  });
  const [open, setOpen] = useState(true);
  const [serverMessage, setServerMessage] = useState('');
  const { loading, data: userProfile } = useQuery(GET_PROFILE);
  const [updateProfile, { loading: isLoading }] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: GET_PROFILE }],
  });

  useEffect(() => {
    if (userProfile) {
      const { getProfile } = userProfile.client;
      setState({
        firstname: getProfile.profile.firstname,
        lastname: getProfile.profile.lastname,
        email: getProfile.email,
        phoneNumber: getProfile.profile.phoneNumber,
        gender: getProfile.profile.gender,
        region: getProfile.profile.region,
        city: getProfile.profile.city,
        country: getProfile.profile.country,
        address: getProfile.profile.address,
      });
    }
  }, [userProfile]);

  if (loading) <Typography>loading...</Typography>;

  const _handleFormSubmit = async () => {
    try {
      const profile = await updateProfile({
        variables: {
          firstname: formik.values.firstname,
          lastname: formik.values.lastname,
          emailAddress: formik.values.emailAddress,
          phoneNumber: formik.values.phoneNumber,
          gender: formik.values.gender,
          region: formik.values.region,
          city: formik.values.city,
          country: formik.values.country,
          address: formik.values.address,
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
        setServerMessage(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstname: state.firstname ? state.firstname : '',
      lastname: state.lastname ? state.lastname : '',
      emailAddress: state.email ? state.email : '',
      phoneNumber: state.phoneNumber ? state.phoneNumber : '',
      gender: state.gender ? state.gender : '',
      region: state.region ? state.region : '',
      city: state.city ? state.city : '',
      country: state.country ? state.country : '',
      address: state.address ? state.address : '',
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
      region,
      city,
      country,
      address,
    },
  } = formik;

  const handleClose = (_event: unknown, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setServerMessage('');
  };

  return (
    <React.Fragment>
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
                <Grid item sm={6}>
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
                <Grid item sm={6}>
                  <TextInput
                    variant="outlined"
                    fullWidth
                    type="text"
                    color="secondary"
                    size="small"
                    label="Region"
                    name="region"
                    value={region}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.region && errors.region}
                    error={touched.region && Boolean(errors.region)}
                  />
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
                  !region ||
                  !emailAddress
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
      {serverMessage.length > 1 && (
        <Snackbar
          open={open}
          handleClose={handleClose}
          message={serverMessage}
        />
      )}
    </React.Fragment>
  );
};

export default Account;
