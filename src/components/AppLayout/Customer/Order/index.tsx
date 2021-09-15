import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles, Theme } from '@material-ui/core/styles';

import {
  customerAccountMenu,
  Props,
} from 'src/components/constant/customerAccountMenu';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Button from 'src/components/SharedLayout/Button';
import Footer from 'src/components/SharedLayout/Footer';

import { customerOrders } from 'src/components/constant/orders';

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
    '& a': {
      display: 'block',
    },
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
  orderTopInfo: {
    '& .MuiTypography-body2': {
      status: 'DELIVERED',
      color: '#75757A',
    },
  },
  orderBottomInfo: {
    '& .MuiTypography-body2': {
      fontSize: '11px',
      background: '#6DBD28',
      color: 'white',
      padding: '.2em .3em',
      borderRadius: '3px',
    },
  },
}));

const Order: FunctionComponent<{}> = () => {
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
              <Typography variant="h6">Orders</Typography>
              <Divider />
              {customerOrders.map((order, index) => (
                <Box key={index} style={{ margin: '1.5em 2em 0px' }}>
                  <Grid
                    container
                    justify="flex-start"
                    alignItems="flex-start"
                    style={{
                      border: '1px solid #ededed',
                      padding: '1em 1em',
                    }}
                  >
                    <Grid item sm={2}>
                      <Image
                        src={order.productImage}
                        width={120}
                        height={120}
                        objectFit="cover"
                        alt="Product preview"
                      />
                    </Grid>
                    <Grid item sm={8}>
                      <Box mb={2} className={classes.orderTopInfo}>
                        <Typography>{order.productDescription}</Typography>
                        <Typography variant="body2">
                          {order.OrderNumber}
                        </Typography>
                      </Box>
                      <Box className={classes.orderBottomInfo}>
                        <Typography component="span" variant="body2">
                          {order.status}
                        </Typography>
                        <Typography variant="subtitle2">
                          {order.OrderDate}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={2}>
                      <Button
                        variant="text"
                        fullWidth
                        disableElevation={true}
                        color="default"
                      >
                        See Details
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Order;
