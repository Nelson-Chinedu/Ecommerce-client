import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Button from 'src/components/SharedLayout/Button';

import { useStyles } from 'src/components/MainLayout/HeroSection/styled.heroSection';

const HeroSection: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Navigation />
      <Box className="banner-wrapper">
        <Box className="banner" />
        <Box className="banner-quick-action" style={{zIndex: 999999}}>
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
            disableElevation={true}
            fullWidth={true}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
