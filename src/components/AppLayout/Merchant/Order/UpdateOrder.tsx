import React, { FunctionComponent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import { useStore } from 'src/store';

import Modal from 'src/components/AppLayout/Merchant/Order/Modal';
import { useStyles } from 'src/components/AppLayout/Merchant/Order/styled.order';

import Button from 'src/components/SharedLayout/Button';

import useModalControl from 'src/components/hooks/useModalControl';

import { MERCHANT_UPDATE_STATUS_ORDER } from 'src/queries';

const animatedComponents = makeAnimated();

const ORDER_STATUS = [
  { label: 'Delivered', value: 'delivered' },
  { label: 'Out-of-stock', value: 'Out-of-stock' },
  { label: 'Enroute', value: 'Enroute' },
];

const UpdateOrder: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const [state, setState] = useModalControl();
  const [updateOrderStatus, { loading }] = useMutation(
    MERCHANT_UPDATE_STATUS_ORDER
  );
  const [isStatus, setIsStatus] = useState<{
    value: string;
    label: string;
  }>({
    value: '',
    label: '',
  });

  const handleCloseModal = () => {
    setState({ ...state, modal: '', id: '' });
  };

  const handleUpdateStatus = async () => {
    try {
      const statusUpdate = await updateOrderStatus({
        variables: { orderNumber: state.id, status: isStatus.value },
      });
      if (statusUpdate) {
        const {
          data: {
            client: {
              updateOrderStatus: { message },
            },
          },
        } = statusUpdate;
        setState({ ...state, modal: '', id: '' });
        uiStore.serverMessage = message;
        uiStore.snackbarSeverity = 'success';
        uiStore.showSnackbar = true;
      }
    } catch (error) {
      uiStore.serverMessage = 'An error occured';
      uiStore.snackbarSeverity = 'error';
      uiStore.showSnackbar = true;
    }
  };

  return (
    <Modal>
      <Box className={classes.wrapper}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ marginBottom: '.8em' }}
        >
          <Grid item>
            <Typography variant="subtitle2">Update Order</Typography>
          </Grid>
          <Grid item>
            <IconButton
              size="medium"
              aria-label="Go back"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: '2em' }}>
          <Grid item sm={12}>
            <Select
              options={ORDER_STATUS}
              closeMenuOnSelect={true}
              components={animatedComponents}
              classNamePrefix={'my-custom-react-select1'}
              placeholder="Order Status"
              name="productCategory"
              onChange={(e: any) => {
                setIsStatus({
                  label: e.label,
                  value: e.value,
                });
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justify="flex-end">
          <Grid item sm={4}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              disableElevation
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item sm={4}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disableElevation
              onClick={handleUpdateStatus}
            >
              {loading ? <CircularProgress size={25} /> : 'Update Status'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default observer(UpdateOrder);
