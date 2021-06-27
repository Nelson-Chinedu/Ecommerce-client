import { FunctionComponent } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import FavouriteIcon from '@material-ui/icons/Favorite';

import { useStore } from 'src/store';

type Props = {
  id: number;
  imagePath: string;
  productName: string;
  productPrice: string;
  favourite: boolean;
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
  const { uiStore } = useStore();

  const handleAddFavourite = (index: number) => {
    uiStore.toggleFavouriteProduct(index);
  };

  const handleRemoveFavourite = (index: number) => {
    uiStore.toggleFavouriteProduct(index);
  };

  return (
    <Grid container spacing={3}>
      {uiStore.productItems.map((productItem: Props, index: number) => (
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
                {productItem.favourite ? (
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

export default observer(Product);
