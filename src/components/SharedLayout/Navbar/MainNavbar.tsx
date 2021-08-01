import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import Sidenav from 'src/components/SharedLayout/Sidenav';

import { useStore } from 'src/store';

const Index: FunctionComponent<{}> = () => {
  const { uiStore } = useStore();
  const router = useRouter();

  const _handleOpenSideNav = (position: string) => {
    uiStore.toggleSideNav();
    uiStore.anchorPosition = position;
  };

  const handleAuthLogin = () => {
    router.push('/auth/login')
  };

  const handleHome = () => {
    router.push('/')
  }

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
          <Grid container>
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
              <IconButton aria-label="search" onClick={handleAuthLogin}>
                <PersonOutlinedIcon fontSize="small" />
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default observer(Index);
