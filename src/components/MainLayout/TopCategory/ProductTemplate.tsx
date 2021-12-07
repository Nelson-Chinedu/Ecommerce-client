import React, { FunctionComponent, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';
// import FavouriteIcon from '@material-ui/icons/Favorite';

import { ProductListContext } from 'src/components/context/userProductList-context';

import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

import { useStore } from 'src/store';

import Button from 'src/components/SharedLayout/Button';

interface IProduct {
  data: [
    {
      productName: string;
      productNumber: number;
      imageUrl: string;
      newPrice: string;
      category: string;
    }
  ];
}

type Props = {
  category: string;
};

const ProductTemplate: FunctionComponent<Props> = ({ category }) => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const { data } = useContext<IProduct>(ProductListContext);

  const handleAddFavourite = (e: any, index: number) => {
    e.stopPropagation();
    uiStore.toggleFavouriteProduct(index);
  };

  return (
    <Grid container spacing={3} style={{ margin: '2em auto', width: '90%' }}>
      {data
        .filter((product) => product.category.toLowerCase() === category)
        .map((product: any, index: number) => (
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
                  <Grid item>
                    <Typography variant="body2" className={classes.productName}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2">
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
                    <FavouriteIconOutlined
                      onClick={(e) => handleAddFavourite(e, index)}
                    />
                  </Grid>
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
          >
            Load more
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductTemplate;
