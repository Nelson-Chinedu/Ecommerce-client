import React, { FunctionComponent, useContext, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
// import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';

import { useStore } from 'src/store';

import Rating from 'src/components/SharedLayout/Rating';
import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';

import { useStyles } from 'src/components/MainLayout/Product/styled.productDetail';

import { ProductPreviewContext } from 'src/components/context/productPreview-context';

interface IContext {
  data: {
    productId: string;
    name: string;
    number: number;
    description: string;
    oldPrice: string | number;
    newPrice: string | number;
    imageUrl: string;
    category: string;
    colors: string[];
    sizes: string[];
    stock: string;
    account: { id: string };
  };
  loading: boolean;
}

const Description: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const { data, loading } = useContext<IContext>(ProductPreviewContext);
  const [isSelectedSize, setIsSelectedSize] = useState<string>('');
  const [isSelectedColor, setIsSelectedColor] = useState<string>('');
  const [isSelectedQty, setIsSelectedQty] = useState<string>('');

  if (loading) return <Typography>loading...</Typography>;
  const {
    productId,
    name,
    number,
    description,
    oldPrice,
    newPrice,
    imageUrl,
    category,
    colors,
    sizes,
    stock,
    account: { id },
  } = data;

  const cartItems = toJS(uiStore.cartItems).flat();
  const filteredItem = cartItems.filter(
    (item: { itemNumber: number }) => item.itemNumber === number
  );

  const handleSize = (size: string) => {
    setIsSelectedSize(size);
  };

  const handleColor = (color: string) => {
    setIsSelectedColor(color);
  };

  const handleQuantity = (e: { target: { value: string } }) => {
    setIsSelectedQty(e.target.value);
  };
  const handleAddToCart = () => {
    if (filteredItem.length) return;

    if (!isSelectedSize || !isSelectedQty || !isSelectedColor) {
      uiStore.serverMessage = 'Product Size, Quantity and Color is required';
      uiStore.snackbarSeverity = 'error';
      uiStore.showSnackbar = true;
    } else {
      const product = {
        itemId: productId,
        itemNumber: number,
        itemName: name,
        itemPrice: newPrice,
        itemImage: imageUrl,
        itemQty: isSelectedQty,
        itemSize: isSelectedSize,
        itemColor: isSelectedColor,
        mId: id,
      };
      uiStore.addToCart(product);
      uiStore.serverMessage = 'Product added to cart';
      uiStore.snackbarSeverity = 'success';
      uiStore.showSnackbar = true;
    }
  };

  const handleRemoveFromCart = () => {
    uiStore.handleRemoveFromCart(number);
    uiStore.serverMessage = 'Product removed from cart';
    uiStore.snackbarSeverity = 'success';
    uiStore.showSnackbar = true;
  };
  return (
    <Grid container direction="row" spacing={2} className={classes.root}>
      <Grid item sm={6}>
        <Image
          src={imageUrl ? imageUrl : '/image/img.jpeg'}
          width="550px"
          height="650px"
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
                  <strong>{stock}</strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <Typography
              variant="body2"
              style={{ lineHeight: '1.6em', margin: '.4em 0px' }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ margin: '.1em 0px' }}>
          <Grid item sm={12}>
            <Typography
              variant="subtitle1"
              component="span"
              className={classes.oldPrice}
            >
              ₦
              <NumberFormat
                value={`${oldPrice}`}
                thousandSeparator={true}
                decimalSeparator="."
                decimalScale={2}
                fixedDecimalScale={true}
                displayType="text"
              />
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              // color="secondary"
              className={classes.newPrice}
            >
              ₦
              <NumberFormat
                value={`${newPrice}`}
                thousandSeparator={true}
                decimalSeparator="."
                decimalScale={2}
                fixedDecimalScale={true}
                displayType="text"
                className={classes.newPrice}
              />
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
                  onClick={() => handleSize(size)}
                  className={isSelectedSize === size ? 'selectedSize' : ''}
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
                className={isSelectedColor === color ? 'selectedColor' : ''}
                style={{
                  backgroundColor: `${color}`,
                  width: '25px',
                  height: '25px',
                  display: 'inline-block',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => handleColor(color)}
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
              defaultValue="choose"
              size="small"
              color="secondary"
              type="text"
              onChange={(e: { target: { value: string } }) => handleQuantity(e)}
            >
              <MenuItem value="choose">Choose QTY</MenuItem>
              <MenuItem value="1">QNT: 1</MenuItem>
              <MenuItem value="2">QNT: 2</MenuItem>
              <MenuItem value="3">QNT: 3</MenuItem>
              <MenuItem value="4">QNT: 4</MenuItem>
              <MenuItem value="5">QNT: 5</MenuItem>
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
              ₦
              <NumberFormat
                value={`${newPrice}`}
                thousandSeparator={true}
                decimalSeparator="."
                decimalScale={2}
                fixedDecimalScale={true}
                displayType="text"
              />
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
              disabled={stock === 'Out-of-stock' ? true : false}
              onClick={
                filteredItem.length ? handleRemoveFromCart : handleAddToCart
              }
            >
              {filteredItem.length ? 'Remove from cart' : 'Add to cart'}
            </Button>
          </Grid>
          {stock === 'Out-of-stock' && (
            <Grid item>
              <Typography variant="body2">
                Product is {stock}, check back later :)
              </Typography>
            </Grid>
          )}
          {/* <Grid item>
            <FavouriteIconOutlined fontSize="default" />
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(Description);
