import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '20%',
    position: 'fixed',
    height: '100vh',
    background: 'white',
    padding: '3em 2em',
    '& .MuiTypography-body1': {
      display: 'flex',
      alignItems: 'center',
      background: '#007AFF',
      padding: '1em 1em',
      margin: '1em 0px',
      borderRadius: '5px',
      color: 'white',
    },
    '& ul': {
      listStyleType: 'none',
      '& li': {
        margin: '1em 0px',
        padding: '1em 1em',
        '& .active': {
          background: '#007AFF',
          color: '#FFF',
          padding: '1em',
          borderRadius: '.2em',
          '& .MuiSvgIcon-root': {
            '& > *': {
              color: '#FFF',
            },
          },
        },
      },
      '& a': {
        display: 'flex',
        alignItems: 'flex-end',
        textDecoration: 'none',
        color: '#7D8592',
        padding: '0px 1em',
        '& .MuiSvgIcon-root': {
          marginRight: '.5em',
          '& > *': {
            color: '#7D8592',
          },
        },
      },
    },
  },
});

const DashboardSidenav = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ul>
        <li>
          <Link href="/app/m/dashboard">
            <a
              className={router.pathname === '/app/m/dashboard' ? 'active' : ''}
            >
              <HomeIcon fontSize="small" /> Dashboard
            </a>
          </Link>
        </li>
        <li>
          <Link href="/app/m/order">
            <a className={router.pathname === '/app/m/order' ? 'active' : ''}>
              <LibraryBooksOutlinedIcon fontSize="small" /> Orders
            </a>
          </Link>
        </li>
        <li>
          <Link href="/app/m/product">
            <a className={router.pathname === '/app/m/product' ? 'active' : ''}>
              <ShoppingBasketIcon fontSize="small" /> Products
            </a>
          </Link>
        </li>
        <li>
          <Link href="/app/m/customer">
            <a
              className={router.pathname === '/app/m/customer' ? 'active' : ''}
            >
              <AccountCircleOutlinedIcon fontSize="small" /> Customers
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="/app/message">
            <a className={router.pathname === '/app/message' ? 'active' : ''}>
              <WhatsAppIcon fontSize="small" /> Messages
            </a>
          </Link>
        </li> */}
        <li>
          <Link href="/app/m/setting">
            <a className={router.pathname === '/app/m/setting' ? 'active' : ''}>
              <SettingsIcon fontSize="small" /> Settings
            </a>
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default DashboardSidenav;
