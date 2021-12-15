import React, { FunctionComponent } from 'react';
import store from 'store';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useStyles } from 'src/components/AuthLayout/ConfirmEmail/styled.confirm';

const ConfirmEmail: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const confirmMessage: string = store.get('__cmsg');
  if (!confirmMessage)
    return <Typography>Sorry!! Something went wrong</Typography>;

  return (
    <Box className={classes.container}>
      <Typography variant="h6">Account created successfully</Typography>
      <Typography variant="body2">
        Kindly check the email you provided for next step
      </Typography>
    </Box>
  );
};

export default ConfirmEmail;
