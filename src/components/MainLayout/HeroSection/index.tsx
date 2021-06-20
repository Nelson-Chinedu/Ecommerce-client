import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

import MainNavbar from 'src/components/SharedLayout/Navbar/MainNavbar';
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
      <MainNavbar />
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
