import React, {FunctionComponent } from 'react';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Footer from 'src/components/SharedLayout/Footer';
import NewsLetter from 'src/components/SharedLayout/Newsletter';
import Divider from 'src/components/SharedLayout/Divider';

import LoginForm from 'src/components/AuthLayout/Login/LoginForm';
import Socials from 'src/components/AuthLayout/Login/Socials';
import { useStyles } from 'src/components/AuthLayout/Login/styled.login';

const Login: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Box className={classnames('banner-wrapper', classes.root)}>
        <Box className="bannerLg" />
        <Box className="banner-quick-action-login">
          <Typography variant="h5" className={classes.caption}>
            Login <span className={classes.inActive}>/ Signup</span>
          </Typography>
          <LoginForm />
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

export default Login;
