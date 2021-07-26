import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import CheckboxIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import TextInput from 'src/components/SharedLayout/TextInput';

const CheckoutPayment: FunctionComponent<{}> = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        style={{ marginTop: '1em', marginBottom: '1em' }}
      >
        <Grid item sm={6}>
          <TextInput
            label="Card Number"
            variant="outlined"
            fullWidth
            color="secondary"
            size="small"
            type="text"
          />
        </Grid>
        <Grid item sm={6}>
          <TextInput
            label="Name on card"
            variant="outlined"
            fullWidth
            color="secondary"
            size="small"
            type="text"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <TextInput
                variant="outlined"
                fullWidth
                color="secondary"
                size="small"
                type="date"
              />
            </Grid>
            <Grid item sm={6}>
              <TextInput
                label="CVV"
                variant="outlined"
                fullWidth
                color="secondary"
                size="small"
                type="text"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item sm={1}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckboxIcon />}
                size="small"
              />
            </Grid>
            <Grid item sm={10}>
              <Typography variant="body2">
                <strong>Save Card</strong>
              </Typography>
              <Typography variant="body2">
                I acknoledge that my card information is saved in my account for
                subsequent transaction.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPayment;
