import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import NumberFormat from 'react-number-format';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';
// import FavouriteIcon from '@material-ui/icons/Favorite';

import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

import { useStore } from 'src/store';

import Button from 'src/components/SharedLayout/Button';

type Props = {
  category: string;
  data?: any;
};

const ProductTemplate: FunctionComponent<Props> = ({ data, category }) => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const router = useRouter();

  const handleAddFavourite = (e: any, index: number) => {
    e.stopPropagation();
    uiStore.toggleFavouriteProduct(index);
  };

  const handleSeeMore = () => {
    router.push({
      pathname: '/product/category/[index]',
      query: { index: category },
    });
  };

  // const handleAddToCart = (e: any) => {
  //   e.preventDefault();
  // };

  return (
    <Grid container spacing={4} style={{ margin: '2em auto', width: '90%' }}>
      {data &&
        data.map((product: any, index: any) => (
          <Link
            href={`/product/${product.name
              .toLowerCase()
              .split(' ')
              .join('-')}-${product.number}`}
            key={index}
          >
            <Grid item sm={3} style={{ margin: '0px' }} key={index}>
              <Grid container className={classes.productContainer}>
                <Box>
                  <Image
                    src={`${
                      product.imageUrl === null
                        ? 'https://via.placeholder.com/50x60.svg'
                        : product.imageUrl
                        ? product.imageUrl
                        : 'https://via.placeholder.com/50x60.svg'
                    }`}
                    objectFit="cover"
                    loading="eager"
                    width={300}
                    height={250}
                  />
                </Box>
                <Grid
                  container
                  justify="space-between"
                  style={{ padding: '10px 10px' }}
                  alignItems="center"
                >
                  <Grid
                    container
                    justify="space-between"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Typography
                        variant="body2"
                        className={classes.productName}
                      >
                        {product.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <FavouriteIconOutlined
                        onClick={(e) => handleAddFavourite(e, index)}
                      />
                    </Grid>
                  </Grid>
                  <Grid container className={classes.divider}>
                    <Grid item sm={12}>
                      <Divider />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justify="space-between"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Typography variant="subtitle2">
                        ₦
                        <NumberFormat
                          value={`${product.newPrice}`}
                          thousandSeparator={true}
                          decimalSeparator="."
                          decimalScale={2}
                          fixedDecimalScale={true}
                          displayType="text"
                        />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <del>
                        <Typography
                          variant="body2"
                          className={classes.oldPrice}
                        >
                          ₦
                          <NumberFormat
                            value={`${product.oldPrice}`}
                            thousandSeparator={true}
                            decimalSeparator="."
                            decimalScale={2}
                            fixedDecimalScale={true}
                            displayType="text"
                            className={classes.oldPrice}
                          />
                        </Typography>
                      </del>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.divider}>
                    <Grid item sm={12}>
                      <Divider />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        className={classes.storeName}
                      >
                        Sold by <span>{product.store?.name}</span>
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* <Grid item sm={12}>
                    <Button
                      variant="outlined"
                      disableElevation
                      fullWidth
                      color="secondary"
                      onClick={(e) => handleAddToCart(e)}
                    >
                      Add to Cart
                    </Button>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Link>
        ))}
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.btnLoadMore}
      >
        <Grid item sm={4}>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            fullWidth
            onClick={handleSeeMore}
          >
            See all
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(ProductTemplate);
