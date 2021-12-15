import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import NumberFormat from 'react-number-format';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';
// import FavouriteIcon from '@material-ui/icons/Favorite';

import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

import { useStore } from 'src/store';

// import Button from 'src/components/SharedLayout/Button';

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

  // const handleAddToCart = (e: any) => {
  //   e.preventDefault();
  // };

  return (
    <Box className={classes.productWrapper}>
      {data &&
        data.map((product: any, index: any) => (
          <Link
            href={`/product/${product.name
              .toLowerCase()
              .split(' ')
              .join('-')}-${product.number}`}
            key={index}
          >
            <Box className={classes.productContainer}>
              <Box className="imageContainer">
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
              <Box className="top">
                <Box>
                  <Typography variant="body2" className={classes.productName}>
                    {product.name}
                  </Typography>
                </Box>
                <Box>
                  <FavouriteIconOutlined
                    onClick={(e) => handleAddFavourite(e, index)}
                  />
                </Box>
              </Box>
              <Box className="divider">
                <Divider />
              </Box>
              <Box className="middle">
                <Box>
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
                </Box>
                <Box>
                  <del>
                    <Typography variant="body2" className={classes.oldPrice}>
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
                </Box>
              </Box>
              <Box className="divider">
                <Divider />
              </Box>
              <Box className="bottom">
                <Typography variant="subtitle1" className={classes.storeName}>
                  Sold by <span>{product.store?.name}</span>
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
    </Box>

    // <Button
    //   variant="outlined"
    //   disableElevation
    //   fullWidth
    //   color="secondary"
    //   onClick={(e) => handleAddToCart(e)}
    // >
    //   Add to Cart
    // </Button>

    //   <Grid
    //     container
    //     alignItems="center"
    //     justify="center"
    //     className={classes.btnLoadMore}
    //   >
    //     <Grid item sm={4}>
    //       <Button
    //         variant="contained"
    //         color="secondary"
    //         disableElevation
    //         fullWidth
    //         onClick={handleSeeMore}
    //       >
    //         See all
    //       </Button>
    //     </Grid>
    //   </Grid>
  );
};

export default observer(ProductTemplate);
