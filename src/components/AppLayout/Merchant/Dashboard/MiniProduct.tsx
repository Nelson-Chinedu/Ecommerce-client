import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NumberFormat from 'react-number-format';
import { useQuery } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { GET_MERCHANT_RECENT_PRODUCT } from 'src/queries';

import { useStyles } from 'src/components/AppLayout/Merchant/Dashboard/styled.dashboard';

interface IProps {
  imageUrl: string;
  name: string;
  category: string;
  newPrice: string | number;
  id: string;
}

interface IData {
  client: {
    getRecentProducts: {
      products: IProps[];
    };
  };
}

const MiniProduct: FunctionComponent<{}> = () => {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_MERCHANT_RECENT_PRODUCT, {
    variables: { take: 4, skip: 0 },
  });

  if (loading) {
    return <div style={{ background: '#9e9e9e4f', height: '350px' }} />;
  }

  const {
    client: {
      getRecentProducts: { products },
    },
  }: IData = data;

  return (
    <Paper style={{ height: '350px' }}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        style={{ paddingBottom: '2em' }}
      >
        <Grid item>
          <Typography variant="body1">Recent Products</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.seeAll}>
            <Link href="/app/m/product">See all</Link>
          </Typography>
        </Grid>
      </Grid>
      {products.map((product: IProps) => (
        <Grid
          key={product.id}
          container
          alignItems="flex-start"
          justify="space-between"
          spacing={2}
          style={{
            margin: '0px 0px',
            width: '100%',
            border: '1px solid #dddde0',
            borderRadius: '5px',
          }}
        >
          <Grid item sm={2}>
            <Image
              src={product.imageUrl ? product.imageUrl : '/image/img.jpeg'}
              width={60}
              height={60}
              alt="product image"
            />
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">{product.category}</Typography>
          </Grid>
          <Grid item sm={4}>
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
        </Grid>
      ))}
    </Paper>
  );
};

export default MiniProduct;
