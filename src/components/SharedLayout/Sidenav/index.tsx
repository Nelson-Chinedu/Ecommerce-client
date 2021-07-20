import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import { makeStyles } from '@material-ui/core/styles';

import { sidenavLinks } from 'src/components/constant/sidenav';

import { useStore } from 'src/store';

const useStyles = makeStyles({
  root: {},
  closeWrapper: {
    marginTop: '2%',
  },
  logoWrapper: {
    margin: '15% 0px',
  },
  linkWrapper: {
    marginTop: '10%',
    '& > .MuiGrid-item': {
      padding: '3% 0px',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
  },
});

const Sidenav: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const _handleCloseSideNav = () => {
    uiStore.toggleSideNav();
  };

  return (
    <Drawer anchor="left" open={uiStore.sidenav} style={{ zIndex: 9999999 }}>
      <Grid
        container
        direction="column"
        alignItems="flex-end"
        className={classes.closeWrapper}
      >
        <Grid item>
          <IconButton onClick={_handleCloseSideNav}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
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
  );
};

export default observer(Sidenav);
