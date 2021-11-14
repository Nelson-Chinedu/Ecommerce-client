import React, { FunctionComponent, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toJS } from 'mobx';
import NumberFormat from 'react-number-format';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { useStore } from 'src/store';

import TextInput from 'src/components/SharedLayout/TextInput';
import Drawer from 'src/components/SharedLayout/Drawer';
import Button from 'src/components/SharedLayout/Button';
import { useStyles } from 'src/components/SharedLayout/Sidenav/styled.sidenav';

import { sidenavLinks } from 'src/components/constant/sidenav';

import { UserContext } from 'src/components/context/userContext';

interface IProps {
  itemImage: string;
  itemId: number;
  itemQty: string;
  itemName: string;
  itemPrice: string;
}

const Sidenav: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const router = useRouter();
  const { isLoggedIn } = useContext(UserContext);

  const cartItems: Array<IProps> = toJS(uiStore.cartItems).flat();

  const handleRemoveItem = (item: { itemId: number }) => {
    uiStore.handleRemoveFromCart(item.itemId);
    uiStore.serverMessage = 'Product removed from cart';
    uiStore.snackbarSeverity = 'success';
    uiStore.showSnackbar = true;
  };

  const handleProceed = () => {
    if (isLoggedIn) {
      uiStore.toggleSideNav();
      router.push('/checkout');
    } else {
      uiStore.toggleSideNav();
      router.push('/auth/login?return_url=%2fcheckout');
    }
  };

  if (uiStore.anchorPosition === 'left') {
    return (
      <Box className={classes.root}>
        <Drawer anchorPosition={uiStore.anchorPosition}>
          <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.logoWrapper}
          >
            <Grid item>
              <Typography>MultiBuy Ways</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.linkWrapper}
          >
            {sidenavLinks.map((sideNav, index: number) => (
              <Link href={sideNav.link} key={index}>
                <Grid item key={index}>
                  <Typography variant="subtitle1">{sideNav.menu}</Typography>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Drawer>
      </Box>
    );
  }

  return (
    uiStore.anchorPosition === 'right' && (
      <Box className={classes.root}>
        <Drawer anchorPosition={uiStore.anchorPosition}>
          {uiStore.cartItems.length === 0 ? (
            <Box className={classes.emptyCart}>
              <Image
                src="/image/shopping-cart.png"
                width={80}
                height={80}
                alt="empty cart"
              />
              <Typography variant="subtitle2">No item added to cart</Typography>
            </Box>
          ) : (
            cartItems.map((item: IProps, index: number) => (
              <React.Fragment key={index}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={5}>
                    <Image
                      src={item.itemImage ? item.itemImage : '/image/img.jpeg'}
                      width={250}
                      height={250}
                      objectFit="cover"
                      alt="product image"
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <Grid
                      container
                      justify="space-between"
                      alignItems="flex-start"
                      spacing={1}
                    >
                      <Grid item className={classes.item}>
                        <Typography variant="body2">{item.itemName}</Typography>
                        <Typography variant="body2">
                          {item.itemQty} x &#8358;{`${item.itemPrice}`}
                        </Typography>
                        <TextInput
                          disabled={true}
                          defaultValue={item.itemQty}
                          select
                          fullWidth={true}
                          size="small"
                          variant="outlined"
                          color="secondary"
                          type="text"
                        >
                          <MenuItem value={item.itemQty}>
                            {`${item.itemQty} Qty`}
                          </MenuItem>
                        </TextInput>
                      </Grid>
                      <Grid item>
                        <IconButton onClick={() => handleRemoveItem(item)}>
                          <HighlightOffIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container style={{ margin: '1em 0px' }}>
                  <Grid item sm={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </React.Fragment>
            ))
          )}
          {uiStore.cartItems.length !== 0 && (
            <Grid container>
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{ margin: '.5em 0px' }}
              >
                <Grid item>
                  <Typography variant="subtitle2">
                    <strong>
                      Subtotal &#8358;
                      <NumberFormat
                        value={uiStore.productPrice.toFixed(2)}
                        displayType="text"
                        thousandSeparator={true}
                      />
                    </strong>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    fullWidth={true}
                    color="secondary"
                    disableElevation={true}
                    className={classes.btnViewCart}
                    href="/cart/overview"
                  >
                    View Cart
                  </Button>
                </Grid>
                <Grid item sm={6}>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    color="secondary"
                    disableElevation={true}
                    className={classes.btnCheckout}
                    onClick={handleProceed}
                  >
                    Checkout
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Drawer>
      </Box>
    )
  );
};

export default observer(Sidenav);
