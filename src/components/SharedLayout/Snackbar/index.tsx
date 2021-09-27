import React, { FunctionComponent } from 'react';
import Snackbar, { SnackbarCloseReason } from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  handleClose: (_event: unknown, reason: SnackbarCloseReason) => void;
  open: boolean;
  message: string;
};

const useStyles = makeStyles({
  root: {
    '& .MuiAlert-standardSuccess': {
      background: '#4CAF50 !important',
    },
    '& .MuiAlert-message': {
      color: '#FFF !important',
    },
  },
});

const Index: FunctionComponent<Props> = ({ handleClose, open, message }) => {
  const classes = useStyles();
  return (
    <Snackbar
      className={classes.root}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <MuiAlert severity="success">{message}</MuiAlert>
    </Snackbar>
  );
};

export default Index;
