import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& ul': {
      listStyle: 'none',
      '& li': {
        padding: '1em',
        fontStyle: 'normal',
        fontFamily: 'arial',
        fontSize: '.9em',
        '&:hover': {
          background: '#ededed',
          cursor: 'pointer',
        },
        '& a': {
          textDecoration: 'none',
        },
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
    '& .MuiButton-contained': {
      background: 'transparent',
      '& .MuiButton-label': {
        color: theme.palette.secondary.main,
      },
    },
  },
  main: {
    marginRight: '2em',
    // padding: '1em',
  },
  upload: {
    '& .MuiSvgIcon-root': {
      background: '#F78B1F',
      borderRadius: '5px',
      width: '100%',
      height: '25px',
      padding: '4px',
      '& > *': {
        padding: '1em',
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
}));

const Account: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
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
                  <Link href={menuList}>{menuList.name}</Link>
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
            <Typography variant="h6">Account Overview</Typography>
            <Divider />
            <Box className={classes.accountContainer}>
              <Box
                style={{
                  position: 'relative',
                  width: '20%',
                  margin: 'auto',
                }}
              >
                <Avatar
                  src="/image/man6.jpg"
                  alt="profile picture"
                  className={classes.large}
                />
                <Box
                  style={{ position: 'absolute', top: '50px', left: '60px' }}
                  className={classes.upload}
                >
                  <IconButton>
                    <PhotoCameraIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              <Box className={classes.accountDetails}>
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <TextInput
                      variant="outlined"
                      fullWidth
                      type="text"
                      color="secondary"
                      size="small"
                      label="Firstname"
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextInput
                      variant="outlined"
                      fullWidth
                      type="text"
                      color="secondary"
                      size="small"
                      label="Lastname"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <TextInput
                      variant="outlined"
                      fullWidth
                      type="email"
                      color="secondary"
                      size="small"
                      label="Email Address"
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextInput
                      variant="outlined"
                      fullWidth
                      type="tel"
                      color="secondary"
                      size="small"
                      label="Phone Number"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <TextInput
                      select
                      variant="outlined"
                      fullWidth
                      type="text"
                      color="secondary"
                      size="small"
                      label="Gender"
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </TextInput>
                  </Grid>
                  <Grid item sm={6}>
                    <TextInput
                      variant="outlined"
                      fullWidth
                      type="date"
                      color="secondary"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <TextInput
                      multiline
                      variant="outlined"
                      fullWidth
                      type="text"
                      color="secondary"
                      size="small"
                      rows={5}
                      label="Address"
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation
                  fullWidth
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Account;
