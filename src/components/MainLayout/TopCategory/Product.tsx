import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import FavouriteIcon from '@material-ui/icons/Favorite';

import { useStore } from 'src/store';

import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

type Props = {
  id: number;
  imagePath: string;
  productName: string;
  productPrice: string;
  favourite: boolean;
};

const Product: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const handleAddFavourite = (e, index: number) => {
    e.stopPropagation()
    uiStore.toggleFavouriteProduct(index);
  };

  const handleRemoveFavourite = (e, index: number) => {
    e.stopPropagation()
    uiStore.toggleFavouriteProduct(index);
  };

  return (
    <Grid container spacing={3}>
      {uiStore.productItems.map((productItem: Props, index: number) => (
        <Link href="/product-detail" key={index}>
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
                      onClick={(e) => handleRemoveFavourite(e, index)}
                    />
                  ) : (
                    <FavouriteIconOutlined
                      onClick={(e) => handleAddFavourite(e, index)}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default observer(Product);
