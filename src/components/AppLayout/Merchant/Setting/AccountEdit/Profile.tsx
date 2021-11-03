import React, { FunctionComponent, useContext } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from 'src/store';

import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';

import { SettingContext } from 'src/components/context/merchantSetting-context';

import { GET_PROFILE, UPDATE_PROFILE } from 'src/queries';

const validationSchema = yup.object().shape({
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  emailAddress: yup
    .string()
    .email('Invalid email address')
    .required('Required'),
  phoneNumber: yup.number().required('Required'),
  gender: yup.string().required('Required'),
  address: yup.string().required('Required'),
  city: yup.string().required('Required'),
  country: yup.string().required('Required'),
});

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
    '& .MuiGrid-container': {
      margin: '1em 0px',
    },
  },
});

interface IProfile {
  firstname: string;
  lastname: string;
  emailAddress: string;
  address: string;
  phoneNumber: string;
  gender: string;
  country: string;
  city: string;
  storeName: string;
  currency: string;
}

const Profile: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const {
    firstname: userFirstname,
    lastname: userLastname,
    gender: userGender,
    phoneNumber: userPhoneNumber,
    emailAddress: userEmailAddress,
    address: userAddress,
    city: userCity,
    country: userCountry,
  } = useContext<IProfile>(SettingContext);

  const [updateProfile, { loading: updateLoading }] = useMutation(
    UPDATE_PROFILE,
    {
      refetchQueries: [{ query: GET_PROFILE }],
    }
  );

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const _handleUpdateProfile = async () => {
    try {
      const profile = await updateProfile({
        variables: {
          firstname: formik.values.firstname,
          lastname: formik.values.lastname,
          phoneNumber: formik.values.phoneNumber,
          gender: formik.values.gender,
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
      firstname: userFirstname ? userFirstname : '',
      lastname: userLastname ? userLastname : '',
      emailAddress: userEmailAddress ? userEmailAddress : '',
      phoneNumber: userPhoneNumber ? userPhoneNumber : '',
      gender: userGender ? userGender : '',
      address: userAddress ? userAddress : '',
      country: userCountry ? userCountry : '',
      city: userCity ? userCity : '',
    },
    validationSchema,
    onSubmit: _handleUpdateProfile,
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
      address,
      city,
      country,
    },
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
          <Typography variant="subtitle2">Edit</Typography>
        </Grid>
      </Grid>
      <Box
        className={classes.root}
        style={{
          border: '1px solid #e5e5ea',
          padding: '1em',
          borderRadius: '5px',
          height: 'auto',
          width: '50%',
          margin: 'auto',
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
              label="Lastname"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.lastname && errors.lastname}
              error={touched.lastname && Boolean(errors.lastname)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <TextInput
              disabled
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="email"
              name="emailAddress"
              value={emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.emailAddress && errors.emailAddress}
              error={touched.emailAddress && Boolean(errors.emailAddress)}
            />
          </Grid>
          <Grid item sm={6}>
            <TextInput
              label="Phone Number"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.phoneNumber && errors.phoneNumber}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item sm={12}>
            <TextInput
              select
              label="Gender"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
              name="gender"
              value={gender}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.gender && errors.gender}
              error={touched.gender && Boolean(errors.gender)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextInput>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <TextInput
              label="Country"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
              name="country"
              value={country}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.country && errors.country}
              error={touched.country && Boolean(errors.country)}
            />
          </Grid>
          <Grid item sm={6}>
            <TextInput
              label="City"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.city && errors.city}
              error={touched.city && Boolean(errors.city)}
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
              name="address"
              value={address}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.address && errors.address}
              error={touched.address && Boolean(errors.address)}
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
              disabled={isSubmitting && updateLoading}
              onClick={handleSubmit}
            >
              {isSubmitting && updateLoading ? (
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

export default observer(Profile);
