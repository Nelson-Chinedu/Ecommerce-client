import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';

import {
  customerAccountMenu,
  Props,
} from 'src/components/constant/customerAccountMenu';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';
import Footer from 'src/components/SharedLayout/Footer';

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
  main: {
    marginRight: '2em',
    paddingBottom: '2em',
  },
  upload: {
    position: 'absolute',
    top: '40px',
    left: '55px',
    '& .MuiSvgIcon-root': {
      background: '#128c7e',
      borderRadius: '50px',
      width: '40px',
      height: '40px',
      padding: '10px',
      '& > *': {
        padding: '2em',
        color: 'white',
      },
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  accountContainer: {
    width: '60%',
    margin: '2em auto',
  },
  accountDetails: {
    margin: '2em 0',
    paddingBottom: '2em',
    '& .MuiGrid-container': {
      marginBottom: '.8em',
    },
  },
  input: {
    display: 'none',
  },
}));

const Inbox: FunctionComponent<{}> = () => {
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
          spacing={1}
          alignItems="flex-start"
          justify="space-between"
        >
          <Grid item sm={3}>
            <Paper className={classes.sidenav}>
              <ul>
                {customerAccountMenu.map((menuList: Props) => (
                  <li
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
          <Grid item sm={8}>
            <Paper className={classes.main}>
              <Typography variant="h6">Inbox</Typography>
              <Divider />
              <Box
                style={{
                  margin: '5em auto',
                  width: '55%',
                  textAlign: 'center',
                }}
              >
                <Image
                  src="/image/empty.svg"
                  width={100}
                  height={100}
                  alt="No message image preview"
                />
                <Box mt={1}>
                  <Typography variant="subtitle2">
                    You don't have any messages
                  </Typography>
                  <Typography variant="subtitle2">
                    Here you will be able to see all the messages that we send
                    you. Stay tuned
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Inbox;
