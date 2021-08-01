import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Footer from 'src/components/SharedLayout/Footer';
import NewsLetter from 'src/components/SharedLayout/Newsletter';
import Divider from 'src/components/SharedLayout/Divider';

import { useStyles } from 'src/components/AuthLayout/Signup/styled.signup';
import SignupForm from 'src/components/AuthLayout/Signup/SignupForm';
import Socials from 'src/components/AuthLayout/Signup/Socials';

const Signup: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Box className={classnames('banner-wrapper', classes.root)}>
        <Box className="bannerSignup" />
        <Box className="banner-quick-action-signup">
          <Typography variant="h5" className={classes.inActive}>
            Login <span className={classes.caption}>/ Signup</span>
          </Typography>
          <SignupForm />
          <Divider>
            <Typography>OR</Typography>
          </Divider>
          <Socials />
        </Box>
      </Box>
      <Container>
        <NewsLetter />
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
