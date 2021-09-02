import { useState, FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
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
  const router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const loggedIn = true;

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
    router.push('/');
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
                <Badge badgeContent={3} color="primary">
                  <ShoppingBasketOutlinedIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" justify="center" spacing={1}>
                {!loggedIn ? (
                  <Grid item>
                    <IconButton onClick={handleAuthLogin}>
                      <PersonOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                ) : (
                  <>
                    <Grid item className={classes.user}>
                      <Typography variant="subtitle2">Hi, Nelson</Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        onClick={handleOpen}
                        disableRipple
                        size="small"
                      >
                        <ExpandMoreIcon style={{ cursor: 'pointer' }} />
                      </IconButton>
                    </Grid>
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
          <Link href="/">My Account</Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/">Orders</Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/">Inbox</Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/">Saved Items</Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/">Coupon Code</Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.popoverLink}>
          <Link href="/">Logout</Link>
        </Typography>
      </Popover>
    </>
  );
};

export default observer(Index);
