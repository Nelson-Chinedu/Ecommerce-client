import React, { FunctionComponent, useContext } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@material-ui/core/Box';
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

import { UPDATE_STORE } from 'src/queries';

const validationSchema = yup.object().shape({
  storeName: yup.string().required('Required'),
  currency: yup.string().required('Required'),
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
  currency: string;
  country: string;
  city: string;
  storeName: string;
  gender: string;
}

interface IProps extends IProfile {
  handleChange: () => void;
  handleBlur: () => void;
  touched: IProfile;
  errors: IProfile;
}

const Store: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const router = useRouter();
  const { uiStore } = useStore();
  const { storeName: userStoreName, currency: userCurrency } =
    useContext<IProfile>(SettingContext);
  const [updateStore, { loading: updateLoading }] = useMutation(UPDATE_STORE);

  const handleBack = () => {
    router.back();
  };

  const _handleUpdateStore = async () => {
    try {
      const store = await updateStore({
        variables: {
          storeName: formik.values.storeName,
          currency: formik.values.currency,
        },
      });
      if (store) {
        const {
          data: {
            client: {
              updateStore: { message },
            },
          },
        } = store;
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
      storeName: userStoreName ? userStoreName : '',
      currency: userCurrency ? userCurrency : '',
    },
    validationSchema,
    onSubmit: _handleUpdateStore,
    enableReinitialize: true,
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    values: { storeName, currency },
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
          <Grid item sm={12}>
            <TextInput
              label="Store Name"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
              name="storeName"
              value={storeName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.storeName && errors.storeName}
              error={touched.storeName && Boolean(errors.storeName)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item sm={12}>
            <TextInput
              label="Currency"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
              name="currency"
              value={currency}
              disabled
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.currency && errors.currency}
              error={touched.currency && Boolean(errors.currency)}
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

export default observer(Store);
