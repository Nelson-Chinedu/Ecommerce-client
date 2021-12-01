import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles, Theme } from '@material-ui/core/styles';

import {
  customerAccountMenu,
  Props,
} from 'src/components/constant/customerAccountMenu';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Button from 'src/components/SharedLayout/Button';
import Footer from 'src/components/SharedLayout/Footer';

type CustomerProps = {
  children: ReactNode;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: '5em',
    '& ul': {
      listStyle: 'none',
      '& li': {
        '& a': {
          padding: '1em',
          textDecoration: 'none',
          '&:hover': {
            background: '#ededed',
            cursor: 'pointer',
          },
        },
        fontStyle: 'normal',
        fontFamily: 'arial',
        fontSize: '.9em',
      },
    },
    '& .active': {
      background: '#ededed',
    },
    '& .MuiTypography-h6': {
      padding: '.6em',
    },
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: 'white',
      },
    },
  },
  navigation: {
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '1.5em',
  },
  sidenav: {
    marginLeft: '2em',
    '& a': {
      display: 'block',
    },
    '& .MuiButton-contained': {
      background: 'transparent',
      '& .MuiButton-label': {
        color: theme.palette.secondary.main,
      },
    },
  },
}));

const CustomerLayout = ({ children }: CustomerProps) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.navigation}>
          <Navigation />
        </Box>
        <Grid
          container
          spacing={6}
          alignItems="flex-start"
          justify="space-between"
        >
          <Grid item sm={3}>
            <Paper className={classes.sidenav}>
              <ul>
                {customerAccountMenu.map((menuList: Props) => (
                  <li
                    key={menuList.name}
                    className={
                      router.pathname === `${menuList.path}` ? 'active' : ''
                    }
                  >
                    <Link href={menuList.path}>{menuList.name}</Link>
                  </li>
                ))}
              </ul>
              <Divider />
              <Button
                variant="contained"
                color="default"
                fullWidth
                disableElevation
              >
                Logout
              </Button>
            </Paper>
          </Grid>
          <Grid item sm={9}>
            {children}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default CustomerLayout;
