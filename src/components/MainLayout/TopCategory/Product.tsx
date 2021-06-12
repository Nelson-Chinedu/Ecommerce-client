import { FunctionComponent } from 'react';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FavouriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { makeStyles, Theme } from '@material-ui/core/styles';

import productItems from 'src/components/constant/productItems';

type Props = {
  id: number;
  imagePath: string;
  productName: string;
  productPrice: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '25%',
  },
  productContainer: {
    '&:hover': {
      cursor: 'pointer',
      border: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
    },
  },
}));

const Product: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {productItems.map((productItem: Props) => (
        <Grid item sm={3} style={{ margin: '0px' }}>
          <Grid container className={classes.productContainer}>
            <Image src={productItem.imagePath} width={300} height={250} />
            <Grid
              container
              justify="space-between"
              style={{ padding: '10px 10px' }}
              alignItems="center"
            >
              <Grid item>
                <Typography>Boutique black solution</Typography>
                <Typography>$152.00</Typography>
              </Grid>
              <Grid item>
                <FavouriteIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
