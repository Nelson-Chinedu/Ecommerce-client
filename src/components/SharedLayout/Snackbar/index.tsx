import React, { FunctionComponent } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  handleClose: any;
  open: boolean;
  message: string;
  severity: 'success' | 'error';
};

const useStyles = makeStyles({
  root: {
    '& .MuiAlert-standardSuccess': {
      background: '#4CAF50 !important',
    },
    '& .MuiAlert-standardError': {
      background: '#ff1c01 !important',
    },
    '& .MuiAlert-message': {
      color: '#FFF !important',
    },
  },
});

const Index: FunctionComponent<Props> = ({
  handleClose,
  open,
  message,
  severity,
}) => {
  const classes = useStyles();
  return (
    <Snackbar
      className={classes.root}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
    >
      <MuiAlert severity={severity}>{message}</MuiAlert>
    </Snackbar>
  );
};

export default Index;
