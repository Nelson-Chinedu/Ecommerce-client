import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';

const CheckoutForm: FunctionComponent<{}> = () => {
  return (
    <Box style={{ marginTop: '1em' }}>
      <Grid container spacing={2} style={{ marginBottom: '1em' }}>
        <Grid item sm={6}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="First Name*"
            type="text"
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
          />
        </Grid>
        <Grid item sm={6}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="Postcode*"
            type="text"
          />
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: '1em' }}>
        <Grid item sm={12}>
          <Checkbox size="small" />{' '}
          <Typography component="span">
            Save this information for next time
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: '1em' }}>
        <Grid item sm={12}>
          <TextInput
            fullWidth={true}
            variant="outlined"
            size="small"
            color="secondary"
            label="Order Notes (Optional)"
            placeholder="Notes about your order, e.g special notes for delivery"
            type="text"
            multiline
            rows={4}
            cols={4}
          />
        </Grid>
      </Grid>
      <Button
        disableElevation={true}
        variant="contained"
        color="secondary"
        fullWidth={false}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default CheckoutForm;
