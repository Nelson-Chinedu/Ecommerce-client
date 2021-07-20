import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import { useStore } from 'src/store';

import Sidenav from 'src/components/SharedLayout/Sidenav';

const Index: FunctionComponent<{}> = () => {
  const { uiStore } = useStore();

  const _handleOpenSideNav = () => {
    uiStore.toggleSideNav();
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
          <IconButton onClick={_handleOpenSideNav}>
            <MenuOutlinedIcon color="action" fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item>
          <Grid container>
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
              <IconButton aria-label="search">
                <PersonOutlinedIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="search">
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