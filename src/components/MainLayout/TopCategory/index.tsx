import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Slider from 'src/components/MainLayout/TopCategory/Slider';
import Navbar from 'src/components/MainLayout/TopCategory/Navbar';
import Product from 'src/components/MainLayout/TopCategory/Product';

const useStyles = makeStyles({
  root: {
    width: '95%',
    margin: 'auto',
  },
  wrapper: {
    width: '87%',
    margin: '20px auto',
  },
});
const TopCategory: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Slider />
      <Box className={classes.wrapper}>
        <Navbar />
        <Product />
      </Box>
    </Box>
  );
};

export default TopCategory;
