import React from 'react';
import { useRouter } from 'next/router';
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

const Success = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleBack = () => {
    router.push('/app/c/orders');
  };
  return (
    <Box className={classes.root}>
      <Image src="/image/check.png" width={50} height={50} alt="" />
      <Grid container alignItems="center" justify="center">
        <Grid item sm={12} className={classes.copy}>
          <Typography variant="subtitle2">Payment made successfully</Typography>
          <Typography variant="subtitle2">Track item in orders page</Typography>
        </Grid>
        <Grid item sm={3} className={classes.btnWrapper}>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            fullWidth
            onClick={handleBack}
          >
            Go back
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Success;
