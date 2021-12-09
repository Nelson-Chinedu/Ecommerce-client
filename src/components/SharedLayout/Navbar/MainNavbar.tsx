import { useState, FunctionComponent, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import Sidenav from 'src/components/SharedLayout/Sidenav';

import { useStore } from 'src/store';
import { Typography } from '@material-ui/core';
import { UserContext } from 'src/components/context/userContext';

const useStyles = makeStyles({
  root: {},
  popoverContainer: {
    '& .MuiPaper-root': {
      width: '200px',
      marginTop: '1em',
      textAlign: 'left',
      padding: '1em',
      zIndex: '9999999px',
    },
  },
  popoverLink: {
    padding: '.8em 0px',
    cursor: 'pointer',
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  user: {
    marginLeft: '1em',
  },
});

const Index: FunctionComponent<{}> = () => {
  const { uiStore } = useStore();
  const { isLoggedIn } = useContext<any>(UserContext);
  const router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const _handleOpenSideNav = (position: string) => {
    uiStore.toggleSideNav();
    uiStore.anchorPosition = position;
  };

  const handleAuthLogin = () => {
    router.push('/auth/login');
  };

  const handleHome = () => {
    const path = isLoggedIn ? '/app/c' : '/';
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('__clu');
    localStorage.removeItem('__cnt');
    router.push('/auth/login');
    uiStore.serverMessage = 'Logged out successfully';
    uiStore.snackbarSeverity = 'success';
    uiStore.showSnackbar = true;
  };

  return (
    <>
      <Sidenav />
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ padding: '10px 20px' }}
      >
        <Grid item style={{ cursor: 'pointer', zIndex: 999999 }}>
          <IconButton onClick={() => _handleOpenSideNav('left')}>
            <MenuOutlinedIcon color="action" fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item style={{ zIndex: 999999 }}>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton aria-label="home" onClick={handleHome}>
                <HomeOutlinedIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="search">
                <SearchIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="search">
                <Badge badgeContent={uiStore.favouriteCount} color="primary">
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="search"
                onClick={() => _handleOpenSideNav('right')}
              >
                <Badge badgeContent={uiStore.cartItems.length} color="primary">
                  <ShoppingBasketOutlinedIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" justify="center" spacing={0}>
                {!isLoggedIn ? (
                  <Grid item>
                    <IconButton onClick={handleAuthLogin}>
                      <PersonOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                ) : (
                  <>
                    <Box
                      onClick={handleOpen}
                      style={{ display: 'flex', cursor: 'pointer' }}
                    >
                      <Grid item className={classes.user}>
                        <Avatar src="/image/man6.jpg" />
                      </Grid>
                      <Grid item>
                        <IconButton disableRipple size="small">
                          <ExpandMoreIcon />
                        </IconButton>
                      </Grid>
                    </Box>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{ root: classes.popoverContainer }}
      >
        <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/app/c/account">My Account</Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/app/c/orders">Orders</Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/app/c/inbox">Inbox</Link>
        </Typography>
        {/* <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/">Saved Items</Link>
        </Typography> */}
        {/* <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/">Coupon Code</Link>
        </Typography> */}
        <Typography
          variant="subtitle2"
          className={classes.popoverLink}
          onClick={handleLogout}
        >
          Logout
        </Typography>
      </Popover>
    </>
  );
};

export default observer(Index);
