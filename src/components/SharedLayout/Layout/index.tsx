import React, { FunctionComponent, ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import DashboardSidenav from 'src/components/SharedLayout/Sidenav/DashboardSidenav';
import TextInput from 'src/components/SharedLayout/TextInput';
import { useStyles } from 'src/components/SharedLayout/Layout/styled.layout';

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
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
                    <Typography variant="subtitle1">John Doe</Typography>
                    <Typography variant="subtitle2">Seller Account</Typography>
                  </Grid>
                  <Grid item>
                    <KeyboardArrowDownIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
