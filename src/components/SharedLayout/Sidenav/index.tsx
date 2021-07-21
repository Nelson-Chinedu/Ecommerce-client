import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { useStore } from 'src/store';

import Button from 'src/components/SharedLayout/Button';
import TextInput from 'src/components/SharedLayout/TextInput';
import Drawer from 'src/components/SharedLayout/Drawer';
import { useStyles } from 'src/components/SharedLayout/Sidenav/styled.sidenav';

import { sidenavLinks } from 'src/components/constant/sidenav';

const Sidenav: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

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
          <Grid container direction="row" spacing={2}>
            <Grid item xs={5}>
              <Image
                src="/image/ct-3.jpg"
                width={250}
                height={250}
                alt="product image"
              />
            </Grid>
            <Grid item xs={7}>
              <Grid container>
                <Grid item>
                  <Typography variant="body2">
                    Easy and Comfort Sweater
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">1 x $100.00</Typography>
                </Grid>
                <Grid
                  container
                  item
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item sm={8}>
                    <TextInput
                      disabled={true}
                      defaultValue="Qty1"
                      select
                      fullWidth={true}
                      size="small"
                      variant="outlined"
                      color="secondary"
                    >
                      <MenuItem value="Qty1">Qty 1</MenuItem>
                    </TextInput>
                  </Grid>
                  <Grid item sm={2}>
                    <HighlightOffIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container style={{ margin: '1em 0px' }}>
            <Grid item sm={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={5}>
              <Image
                src="/image/ct-3.jpg"
                width={250}
                height={250}
                alt="product image"
              />
            </Grid>
            <Grid item xs={7}>
              <Grid container>
                <Grid item>
                  <Typography variant="body2">
                    Easy and Comfort Sweater
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">1 x $100.00</Typography>
                </Grid>
                <Grid
                  container
                  item
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item sm={8}>
                    <TextInput
                      disabled={true}
                      defaultValue="Qty1"
                      select
                      fullWidth={true}
                      size="small"
                      variant="outlined"
                      color="secondary"
                    >
                      <MenuItem value="Qty1">Qty 1</MenuItem>
                    </TextInput>
                  </Grid>
                  <Grid item sm={2}>
                    <HighlightOffIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container style={{ margin: '1em 0px' }}>
            <Grid item sm={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              container
              alignItems="center"
              justify="center"
              style={{ margin: '.5em 0px' }}
            >
              <Grid item>
                <Typography variant="subtitle2">
                  <strong>Subtotal $299.00</strong>
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
                  href="/view-cart"
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
                >
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Drawer>
      </Box>
    )
  );
};

export default observer(Sidenav);
