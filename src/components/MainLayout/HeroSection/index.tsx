import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Badge from '@material-ui/core/Badge';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Button from 'src/components/SharedLayout/Button';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '600px',
    '& .MuiTypography-body2': {
      padding: '10px 0px 0px',
    },
    '& .MuiTypography-h5': {
      padding: '15px 0px',
    },
  },
  oldPrice: {
    color: '#96999C',
    paddingRight: '10px',
  },
  btnShop: {
    '& > *': {
      color: theme.palette.secondary.main,
      textTransform: 'capitalize',
    },
  },
}));

const HeroSection: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ padding: '10px 20px' }}
      >
        <Grid item>
          <MenuOutlinedIcon color="action" fontSize="small" />
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
                <Badge badgeContent={1} color="primary">
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
      <Box className="banner-wrapper">
        <Box className="banner" />
        <Box className="banner-quick-action">
          <Typography variant="h4">Leather Handbag</Typography>
          <Typography variant="body2">
            Nautica Sandy Jr. Top Handel Satchel with Removable crossbody Strap
          </Typography>
          <Typography variant="h5">
            <del className={classes.oldPrice}>$120.00</del> $90.00
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.btnShop}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
