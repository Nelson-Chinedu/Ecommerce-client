import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { makeStyles, Theme } from '@material-ui/core/styles';

import menus from 'src/components/constant/menus';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  nav: {
    display: 'flex',
    position: 'sticky',
    bottom: '0',
    justifyContent: 'space-around',
    padding: '15px 10px',
    backgroundColor: theme.palette.secondary.light,
    margin: '20px auto',
    listStyle: 'none',
    '& > *': {
      display: 'flex',
      alignItems: 'center',
    },
  },
}));

const Navbar: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ul className={classes.nav}>
        {menus.map((menu) => (
          <li>
            {menu.name}
            <KeyboardArrowDownIcon />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Navbar;
