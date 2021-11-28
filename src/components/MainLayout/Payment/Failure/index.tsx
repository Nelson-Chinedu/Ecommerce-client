import React from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Button from 'src/components/SharedLayout/Button';

const useStyles = makeStyles({
  root: {
    width: '30%',
    margin: '5em auto',
    textAlign: 'center',
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: 'white',
      },
    },
  },
  copy: {
    marginTop: '1.2em',
  },
  btnWrapper: {
    marginTop: '2em',
  },
});

const Failure = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Image src="/image/close.png" width={50} height={50} alt="" />
      <Grid container alignItems="center" justify="center">
        <Grid item sm={12} className={classes.copy}>
          <Typography variant="subtitle2">
            An error occured while making payment
          </Typography>
          <Typography variant="subtitle2">Please try again</Typography>
        </Grid>
        <Grid item sm={3} className={classes.btnWrapper}>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            fullWidth
          >
            Go back
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Failure;
