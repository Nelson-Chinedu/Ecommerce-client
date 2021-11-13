import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { toJS } from 'mobx';
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
import { useStyles } from 'src/components/SharedLayout/Sidenav/styled.sidenav';

import { sidenavLinks } from 'src/components/constant/sidenav';

interface IProps {
  imageUrl: string;
  itemId: number;
  itemQty: string;
  itemName: string;
  itemPrice: string;
}

const Sidenav: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const cartItems: Array<IProps> = toJS(uiStore.cartItems).flat();

  const handleRemoveItem = (item: { itemId: number }) => {
    uiStore.handleRemoveFromCart(item.itemId);
    uiStore.serverMessage = 'Product removed from cart';
    uiStore.snackbarSeverity = 'success';
    uiStore.showSnackbar = true;
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
            <Typography>No item added to cart</Typography>
          ) : (
            cartItems.map((item: IProps, index: number) => (
              <React.Fragment key={index}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={5}>
                    <Image
                      src={item.imageUrl ? item.imageUrl : '/image/img.jpeg'}
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
                          {item.itemQty} x {`N ${item.itemPrice}`}
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
        </Drawer>
      </Box>
    )
  );
};

export default observer(Sidenav);
