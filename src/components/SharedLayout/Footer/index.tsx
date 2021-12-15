import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { useStyles } from 'src/components/SharedLayout/Footer/styled.footer';

const Footer: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Grid container alignItems="flex-start" justify="space-between">
            <Grid item sm={2}>
              <Typography variant="h6">Social</Typography>
              <Box>
                <Grid container spacing={1}>
                  <Grid item>
                    <InstagramIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">Instagram</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <TwitterIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">Twitter</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <FacebookIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">Facebook</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                    <YouTubeIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">YouTube</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item sm={2}>
              <Typography variant="h6">Contact</Typography>
              <Box>
                <Typography variant="body2">Contact Us</Typography>
                <Typography variant="body2">yourexample@email.com</Typography>
                <Typography variant="body2">example@email.com</Typography>
                <Typography variant="body2">Call us: +958 444 2301</Typography>
              </Box>
            </Grid>
            <Grid item sm={2}>
              <Typography variant="h6">About</Typography>
              <Box>
                <Typography variant="body2">Support Center</Typography>
                <Typography variant="body2">Customer Support</Typography>
                <Typography variant="body2">About Us</Typography>
                <Typography variant="body2">Copyright</Typography>
              </Box>
            </Grid>
            <Grid item sm={2}>
              <Typography variant="h6">Customer Care</Typography>
              <Box>
                <Typography variant="body2">FAQ &amp; Helps</Typography>
                <Typography variant="body2">Shipping &amp; Delivery</Typography>
                <Typography variant="body2">Return &amp; Exchanges</Typography>
              </Box>
            </Grid>
            <Grid item sm={2}>
              <Typography variant="h6">Our Information</Typography>
              <Box>
                <Typography variant="body2">Privacy policy update</Typography>
                <Typography variant="body2">Terms &amp; conditions</Typography>
                <Typography variant="body2">Return Policy</Typography>
                <Typography variant="body2">Site Map</Typography>
              </Box>
            </Grid>
            <Grid item sm={2}>
              <Typography variant="h6">Make Money With Multibuy</Typography>
              <Box>
                <Typography variant="body2">
                  <Link href="/auth/signup?t=m">Sell on Multibuy</Link>
                </Typography>
                <Typography variant="body2">
                  Become a Logistics Service Partner
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="body2">
              Copyright &copy; 2021. All rights reserved
            </Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" justify="center">
              <Grid item>
                <Image
                  src="/image/icons-mastercard.svg"
                  width={100}
                  height={50}
                  alt=""
                />
              </Grid>
              <Grid item>
                <Image
                  src="/image/icons-visa.svg"
                  width={100}
                  height={40}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
