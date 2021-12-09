import React, { FunctionComponent, ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Popover from '@material-ui/core/Popover';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { useStore } from 'src/store';

import DashboardSidenav from 'src/components/SharedLayout/Sidenav/DashboardSidenav';
import TextInput from 'src/components/SharedLayout/TextInput';
import { useStyles } from 'src/components/SharedLayout/Layout/styled.layout';
import { SettingContext } from 'src/components/context/merchantSetting-context';

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  const { uiStore } = useStore();
  const { firstname, lastname } = useContext(SettingContext);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('__clu');
    localStorage.removeItem('__cnt');
    router.push('/auth/login');
    uiStore.serverMessage = 'Logged out successfully';
    uiStore.snackbarSeverity = 'success';
    uiStore.showSnackbar = true;
  };

  return (
    <Box className={classes.root}>
      <Box>
        <DashboardSidenav />
      </Box>
      <Box className={classes.mainWrapper}>
        <Grid container alignItems="flex-start" justify="space-between">
          <Grid item sm={5}>
            <TextInput
              variant="outlined"
              label="Search"
              fullWidth
              color="secondary"
              size="small"
              type="text"
            />
          </Grid>
          <Grid item sm={4}>
            <Grid container spacing={1} alignItems="center" justify="flex-end">
              <Grid
                item
                style={{ background: 'white' }}
                className={classes.notification}
              >
                <Badge variant="dot" color="primary">
                  <NotificationsOutlinedIcon fontSize="small" />
                </Badge>
              </Grid>
              <Grid item className={classes.account}>
                <Grid
                  container
                  alignItems="center"
                  justify="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Avatar
                      variant="square"
                      src="/image/man.jpeg"
                      alt="profile"
                    />
                  </Grid>
                  <Grid item className={classes.user}>
                    <Typography variant="subtitle1">
                      {firstname || lastname
                        ? `${firstname} ${lastname}`
                        : 'Welcome'}
                    </Typography>
                    <Typography variant="subtitle2">
                      Merchant Account
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={handleOpen} disableRipple size="small">
                      <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {children}
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{ root: classes.popoverContainer }}
      >
        <Typography
          variant="subtitle2"
          className={classes.popoverLink}
          onClick={handleLogout}
        >
          Logout
        </Typography>
      </Popover>
    </Box>
  );
};

export default observer(Layout);
