import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import store from 'store';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Footer from 'src/components/SharedLayout/Footer';
import NewsLetter from 'src/components/SharedLayout/Newsletter';
import Divider from 'src/components/SharedLayout/Divider';

import LoginForm from 'src/components/AuthLayout/Login/LoginForm';
import Socials from 'src/components/AuthLayout/Login/Socials';
import { useStyles } from 'src/components/AuthLayout/Login/styled.login';

const Login: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const isLoggedIn = store.get('__clu');

  if (isLoggedIn) {
    return (
      <Box style={{ width: '50%', margin: '10em auto', textAlign: 'center' }}>
        <Image src="/image/loading.svg" alt="loading" width={50} height={50} />
      </Box>
    );
  }

  return (
    <>
      <Navigation />
      <Box className={classnames('banner-wrapper', classes.root)}>
        {!isMatch && <Box className="bannerLg" />}
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
