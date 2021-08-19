import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

// import Slider from 'src/components/MainLayout/TopCategory/Slider';
import Navbar from 'src/components/MainLayout/TopCategory/Navbar';
import Product from 'src/components/MainLayout/TopCategory/Product';
import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

const TopCategory: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* <Slider /> */}
        <Navbar />
      <Box className={classes.wrapper}>
        <Product />
      </Box>
    </Box>
  );
};

export default TopCategory;
