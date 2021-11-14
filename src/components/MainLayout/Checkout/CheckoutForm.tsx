import React, { FunctionComponent, useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Typography from '@material-ui/core/Typography';

import TextInput from 'src/components/SharedLayout/TextInput';
// import Button from 'src/components/SharedLayout/Button';
import { ProfileContext } from 'src/components/context/userProfile-context';

const validationSchema = yup.object().shape({
  user_firstName: yup.string().required('Required'),
  user_lastName: yup.string().required('Required'),
  user_email: yup.string().email('Invalid Email Address').required('Required'),
  user_address: yup.string().required('Required'),
  user_phone: yup
    .number()
    .required('Required')
    .typeError('Enter a valid mobile number'),
  user_city: yup.string().required('Required'),
  user_country: yup.string().required('Required'),
});

const CheckoutForm: FunctionComponent<{}> = () => {
  const {
    firstname,
    lastname,
    emailAddress,
    phoneNumber,
    city,
    country,
    address,
  } = useContext(ProfileContext);
  const _handleForm = () => {};

  const formik = useFormik({
    initialValues: {
      user_firstName: firstname ? firstname : '',
      user_lastName: lastname ? lastname : '',
      user_address: address ? address : '',
      user_phone: phoneNumber ? phoneNumber : '',
      user_email: emailAddress ? emailAddress : '',
      user_city: city ? city : '',
      user_country: country ? country : '',
    },
    validationSchema,
    onSubmit: _handleForm,
    enableReinitialize: true,
  });

  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    values: {
      user_firstName,
      user_lastName,
      user_email,
      user_city,
      user_country,
      user_address,
      user_phone,
    },
  } = formik;

  return (
    <Box style={{ marginTop: '1em' }}>
      <Typography variant="subtitle2">
        <Checkbox
          checkedIcon={<CheckCircleIcon />}
          icon={<RadioButtonUncheckedIcon />}
          size="small"
          checked={
            formik.values.user_firstName &&
            formik.values.user_lastName &&
            formik.values.user_email &&
            formik.values.user_city &&
            formik.values.user_country &&
            formik.values.user_address &&
            formik.values.user_country
              ? true
              : false
          }
        />
        Shipping Address
      </Typography>
      <Grid
        container
        spacing={2}
        style={{ marginBottom: '1em', marginTop: '1em' }}
      >
        <Grid item sm={6}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="First Name*"
            type="text"
            name="user_firstName"
            value={user_firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.user_firstName && errors.user_firstName}
            error={touched.user_firstName && Boolean(errors.user_firstName)}
          />
        </Grid>
        <Grid item sm={6}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="Last Name*"
            type="text"
            name="user_lastName"
            value={user_lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.user_lastName && errors.user_lastName}
            error={touched.user_lastName && Boolean(errors.user_lastName)}
          />
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: '1em' }}>
        <Grid item sm={12}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="Address*"
            rows={4}
            cols={4}
            multiline
            type="text"
            name="user_address"
            value={user_address}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.user_address && errors.user_address}
            error={touched.user_address && Boolean(errors.user_address)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: '1em' }}>
        <Grid item sm={6}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="Phone/Mobile*"
            type="tel"
            name="user_phone"
            value={user_phone}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.user_phone && errors.user_phone}
            error={touched.user_phone && Boolean(errors.user_phone)}
          />
        </Grid>
        <Grid item sm={6}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="Email*"
            type="email"
            name="user_email"
            disabled
            value={user_email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.user_email && errors.user_email}
            error={touched.user_email && Boolean(errors.user_email)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: '1em' }}>
        <Grid item sm={6}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="City/Town*"
            type="text"
            name="user_city"
            value={user_city}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.user_city && errors.user_city}
            error={touched.user_city && Boolean(errors.user_city)}
          />
        </Grid>
        <Grid item sm={6}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="Country*"
            type="text"
            name="user_country"
            disabled
            value={user_country}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.user_country && errors.user_country}
            error={touched.user_country && Boolean(errors.user_country)}
          />
        </Grid>
      </Grid>
      {/* <Button
        disableElevation={true}
        variant="contained"
        color="secondary"
        fullWidth={false}
        onClick={handleSubmit}
      >
        {isSubmitting ? <CircularProgress size={20} /> : 'Place Order'}
      </Button> */}
    </Box>
  );
};

export default CheckoutForm;
