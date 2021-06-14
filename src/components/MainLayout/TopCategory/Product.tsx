import { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import FavouriteIcon from '@material-ui/icons/Favorite';
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
  favouriteIcon: {
    '& > *': {
      color: 'red',
    },
  },
}));

const Product: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [isFavourite, setIsFavourite] = useState([]);

  const handleAddFavourite = (index: any) => {
    setIsFavourite((prev) => [...prev, index]);
  };

  const handleRemoveFavourite = (index: any) => {
    const newArr = isFavourite.filter((arr) => arr !== index);
    setIsFavourite(newArr);
  };

  return (
    <Grid container spacing={3}>
      {productItems.map((productItem: Props, index: number) => (
        <Grid item sm={3} style={{ margin: '0px' }} key={index}>
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
                {isFavourite.includes(index) ? (
                  <FavouriteIcon
                    className={classes.favouriteIcon}
                    onClick={() => handleRemoveFavourite(index)}
                  />
                ) : (
                  <FavouriteIconOutlined
                    onClick={() => handleAddFavourite(index)}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
