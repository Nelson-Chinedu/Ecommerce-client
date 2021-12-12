import React, { FunctionComponent, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseOutlined';

import {
  useStyles,
  StyledDrawer,
} from 'src/components/SharedLayout/Drawer/style.drawer';

import { useStore } from 'src/store';

type Props = {
  anchorPosition?: 'left' | 'right';
  children?: ReactNode;
  width?: boolean;
};

const SideDrawer: FunctionComponent<Props> = ({ children, anchorPosition }) => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const _handleCloseSideNav = () => {
    uiStore.toggleSideNav();
  };

  return (
    <StyledDrawer
      anchor={anchorPosition}
      open={uiStore.sidenav}
      onClose={_handleCloseSideNav}
      style={{ zIndex: 9999999 }}
    >
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
      {children}
    </StyledDrawer>
  );
};

export default observer(SideDrawer);
