import React, { FunctionComponent, useContext } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';

import Rating from 'src/components/SharedLayout/Rating';
import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';

import { useStyles } from 'src/components/MainLayout/Product/styled.productDetail';

import { ProductPreviewContext } from 'src/components/context/productPreview-context';

const Description: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { data, loading } = useContext(ProductPreviewContext);

  if (loading) return <Typography>loading...</Typography>;

  const {
    name,
    description,
    oldPrice,
    newPrice,
    imageUrl,
    category,
    colors,
    sizes,
  } = data;

  return (
    <Grid container direction="row" spacing={2} className={classes.root}>
      <Grid item sm={6}>
        <Image
          src={imageUrl ? imageUrl : '/image/img.jpeg'}
          width="550px"
          height="550px"
          quality={100}
          loading="eager"
          objectFit="cover"
          alt="Product preview"
        />
      </Grid>
      <Grid container justify="space-between" item sm={6}>
        <Grid container alignItems="flex-start" justify="space-between">
          <Grid item>
            <Typography variant="h5">
              <strong>{name}</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1} alignItems="center" justify="center">
              <Grid item>
                <Typography variant="subtitle1">
                  <strong>3623</strong>
                </Typography>
              </Grid>
              <Grid item>
                <Rating />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <Typography variant="body2">{description}</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <Typography
              variant="subtitle1"
              component="span"
              color="primary"
              className={classes.oldPrice}
            >
              {`$ ${oldPrice}`}
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              color="secondary"
              className={classes.newPrice}
            >
              {`$ ${newPrice}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid container className={classes.preference}>
          <Grid item sm={12}>
            <Typography variant="body1">Size</Typography>
            <ButtonGroup>
              {sizes.map((size: string, index: number) => (
                <Button
                  variant="outlined"
                  disableElevation={true}
                  color="secondary"
                  key={index}
                  fullWidth={true}
                >
                  {size}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid container className={classes.preference}>
          <Grid item sm={12}>
            <Typography variant="body1">Color</Typography>
            {colors.map((color: string, index: number) => (
              <Box
                key={index}
                style={{
                  backgroundColor: `${color}`,
                  width: '25px',
                  height: '25px',
                  display: 'inline-block',
                  marginRight: '10px',
                }}
              />
            ))}
          </Grid>
        </Grid>
        <Grid container className={classes.quantity}>
          <Grid container item sm={12} alignItems="center">
            <Typography component="span" variant="body1">
              Quantity:
            </Typography>
            <TextInput
              select
              variant="outlined"
              fullWidth={false}
              defaultValue="qty1"
              size="small"
              color="secondary"
              type="text"
            >
              <MenuItem value="qty1">QNT: 1</MenuItem>
              <MenuItem value="qty2">QNT: 2</MenuItem>
              <MenuItem value="qty3">QNT: 3</MenuItem>
              <MenuItem value="qty4">QNT: 4</MenuItem>
              <MenuItem value="qty5">QNT: 5</MenuItem>
            </TextInput>
          </Grid>
        </Grid>
        <Grid container className={classes.info}>
          <Grid item>
            <Typography component="span" variant="body1">
              Category:
            </Typography>
            <Typography component="span" variant="body2">
              {category}
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.info}>
          <Grid item>
            <Typography component="span" variant="body1">
              Subtotal:
            </Typography>
            <Typography component="span" color="secondary" variant="body2">
              {`$ ${newPrice}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="flex-start" spacing={3}>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              disableElevation={true}
              className={classes.btnAdd}
              fullWidth={true}
            >
              Add to cart
            </Button>
          </Grid>
          <Grid item>
            <FavouriteIconOutlined fontSize="default" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Description;
