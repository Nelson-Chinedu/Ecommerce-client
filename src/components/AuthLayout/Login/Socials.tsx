import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from 'src/components/SharedLayout/Button';
import { useStyles } from 'src/components/AuthLayout/Login/styled.login';

const Socials: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} alignItems="center" justify="space-between">
        <Grid item sm={12} md={12}>
          <Button
            variant="outlined"
            color="secondary"
            disableElevation={true}
            fullWidth
          >
            <Image src="/image/google.svg" width={20} height={20} alt="" />{' '}
            <span style={{ paddingLeft: '1em' }}>Sign in with Google</span>
          </Button>
        </Grid>
        <Grid item sm={12} md={12}>
          <Button
            variant="outlined"
            color="secondary"
            disableElevation={true}
            fullWidth
          >
            <Image src="/image/facebook.svg" width={20} height={20} alt="" />{' '}
            <span style={{ paddingLeft: '1em' }}>Sign in with Facebook</span>
          </Button>
        </Grid>
        <Grid container className={classes.signup}>
          <Grid item sm={12}>
            <Typography variant="subtitle2">
              Don't have an account?{' '}
              <Link href="/auth/signup?t=c">Sign up</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Socials;
