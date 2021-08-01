import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from 'src/components/SharedLayout/Button';

const Socials: FunctionComponent<{}> = () => {
  return (
    <>
      <Grid
            container
            spacing={3}
            alignItems="center"
            justify="space-between"
          >
            <Grid item sm={6}>
              <Button
                variant="outlined"
                color="secondary"
                disableElevation={true}
                fullWidth
              >
                <Image
                  src="/image/google.svg"
                  width={20}
                  height={20}
                  alt="Google logo"
                />{' '}
                <span style={{ paddingLeft: '1em' }}>Signup with Google</span>
              </Button>
            </Grid>
            <Grid item sm={6}>
              <Button
                variant="outlined"
                color="secondary"
                disableElevation={true}
                fullWidth
              >
                <Image
                  src="/image/facebook.svg"
                  width={20}
                  height={20}
                  alt="Facebook logo"
                />{' '}
                <span style={{ paddingLeft: '1em' }}>Signup with Facebook</span>
              </Button>
            </Grid>
            <Grid container>
              <Grid item sm={12}>
                <Typography>
                  Already have an account? <Link href="/auth/login">Login</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
    </>
  )
};

export default Socials;
