import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

import menus from 'src/components/constant/menus';

type Props = {
  id: number;
  name: string;
};

const Navbar: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ul className={classes.nav}>
        {menus.map((menu: Props, index: number) => (
          <li key={index}>
            {menu.name}
            <KeyboardArrowDownIcon className={classes.icon} fontSize="small" />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Navbar;
