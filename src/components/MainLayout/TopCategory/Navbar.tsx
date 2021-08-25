import { FunctionComponent, ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';

import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

import useElementOnScreen from 'src/components/hooks/useElementOnScreen';
interface LinkTabProps {
  label?: string;
  href?: string;
}

type Props = {
  handleChange: (_event: ChangeEvent, newValue: number) => void;
  value: number;
};

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const Navbar: FunctionComponent<Props> = ({ handleChange, value }) => {
  const classes = useStyles();
  const [containerRef, isVisble] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });
  console.log(isVisble, '??');
  return (
    <>
      {!isVisble ? (
        <AppBar position="sticky" style={{ background: 'white' }}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tab"
          >
            <LinkTab label="Men" {...a11yProps(1)} />
            <LinkTab label="Women" {...a11yProps(2)} />
            <LinkTab label="Makeup" {...a11yProps(3)} />
            <LinkTab label="Hair Care" {...a11yProps(4)} />
            <LinkTab label="Skin care" {...a11yProps(5)} />
            <LinkTab label="Brand shop" {...a11yProps(6)} />
            <LinkTab label="Baby" {...a11yProps(7)} />
            <LinkTab label="Watches" {...a11yProps(8)} />
            <LinkTab label="Clothes" {...a11yProps(9)} />
            <LinkTab label="Shoes" {...a11yProps(10)} />
          </Tabs>
        </AppBar>
      ) : (
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tab"
        >
          <LinkTab label="Men" {...a11yProps(1)} />
          <LinkTab label="Women" {...a11yProps(2)} />
          <LinkTab label="Makeup" {...a11yProps(3)} />
          <LinkTab label="Hair Care" {...a11yProps(4)} />
          <LinkTab label="Skin care" {...a11yProps(5)} />
          <LinkTab label="Brand shop" {...a11yProps(6)} />
          <LinkTab label="Baby" {...a11yProps(7)} />
          <LinkTab label="Watches" {...a11yProps(8)} />
          <LinkTab label="Clothes" {...a11yProps(9)} />
          <LinkTab label="Shoes" {...a11yProps(10)} />
        </Tabs>
      )}
      <Box ref={containerRef} />
    </>
  );
};

export default Navbar;
