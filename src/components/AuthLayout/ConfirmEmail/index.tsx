import React, { FunctionComponent } from 'react';
import store from 'store';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const ConfirmEmail: FunctionComponent<{}> = () => {
  const confirmMessage: string = store.get('__cmsg');
  if (!confirmMessage)
    return <Typography>Sorry!! Something went wrong</Typography>;

  return (
    <Box>
      <Typography>Account created successfully</Typography>
      <Typography>Kindly check the email you provided for next step</Typography>
    </Box>
  );
};

export default ConfirmEmail;
