import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@apollo/client';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';

import { GET_ALL_PRODUCT_CATEGORY } from 'src/queries';

import { useStyles } from 'src/components/MainLayout/Category/styled.category';

interface IProduct {
  name: string;
  number: string | number;
  imageUrl: string;
  newPrice: string | number;
  oldPrice: string | number;
}

const Category: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const {
    query: { index },
  }: any = useRouter();

  const firstChar = index.charAt(0).toUpperCase();
  const rest = index.slice(1).toLowerCase();
  const categoryParam = `${firstChar}${rest}`;

  // const [isLoadMore, setIsLoadMore] = useState(8);
  const { loading, data } = useQuery(GET_ALL_PRODUCT_CATEGORY, {
    variables: {
      category: index && categoryParam && categoryParam,
      take: 8,
      skip: 0,
    },
  });

  if (loading || data === 'undefined' || !data) {
    return (
      <>
        <Navigation />
        <Box style={{ width: '95%', margin: '2em auto' }}>
          <Grid
            container
            spacing={3}
            style={{
              width: '90%',
              margin: '2em auto',
            }}
          >
            {[0, 1, 2, 3].map((list: number) => (
              <React.Fragment key={list}>
                <Grid item sm={3}>
                  <Skeleton height={300} />
                </Grid>
                <Grid item sm={3}>
                  <Skeleton height={300} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </>
    );
  }

  const {
    public: {
      getAllProducts: { products },
    },
  } = data;

  return (
    <>
      <Navigation />
      <Box className={classes.root}>
        <Grid container spacing={3} className={classes.gridWrapper}>
          {products &&
            products.map((product: IProduct, index: any) => (
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
                          // onClick={(e) => handleAddFavourite(e, index)}
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
                            Sold by <span>Jake store</span>
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
        </Grid>
      </Box>
    </>
  );
};

export default Category;
