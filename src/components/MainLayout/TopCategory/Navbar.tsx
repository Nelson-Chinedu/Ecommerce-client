import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  return (
    <Box className={classes.root} style={{ position: 'static', top: '0px', width: ''}}>
      <ul className={classes.nav}>
        {menus.map((menu: Props, index: number) => (
          <Link href={`/shop/${menu.name}`}>
          <li key={index}>
            <a className={router.pathname === '/' ? 'active' : ''}>
            {menu.name}
            <KeyboardArrowDownIcon className={classes.icon} fontSize="small" />
            </a>
          </li>
          </Link>
        ))}
      </ul>
    </Box>
  );
};

export default Navbar;
