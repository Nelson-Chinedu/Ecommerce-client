import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { miniProducts, Props } from 'src/components/constant/miniProducts';

const MiniProduct: FunctionComponent<{}> = () => {
  return (
    <Paper style={{ height: '350px' }}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        style={{ paddingBottom: '.5em' }}
      >
        <Grid item>
          <Typography variant="body1">Top Products</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">See all</Typography>
        </Grid>
      </Grid>
      {miniProducts.map((miniProduct: Props) => (
        <Grid
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
              src={miniProduct.imagePath}
              width={60}
              height={60}
              alt="product image"
            />
          </Grid>
          <Grid item sm={8}>
            <Typography variant="body2">{miniProduct.productName}</Typography>
            <Typography variant="body2">
              {miniProduct.productCategory}
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography variant="body2">{miniProduct.price}</Typography>
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
};

export default MiniProduct;
