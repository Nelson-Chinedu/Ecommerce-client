import React, { ChangeEvent, FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useElementOnScreen from 'src/components/hooks/useElementOnScreen';

import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

type Props = {
  handleChange: (_event: ChangeEvent<{}>, newValue: number) => void;
  value: number;
};

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Navbar: FunctionComponent<Props> = ({ handleChange, value }) => {
  const classes = useStyles();
  const [containerRef, isVisble]: (boolean | any)[] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  return (
    <div className={classes.navbar}>
      {!isVisble ? (
        <AppBar position="fixed" style={{ background: 'white' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Men" {...a11yProps(0)} />
            <Tab label="Women" {...a11yProps(1)} />
            <Tab label="Kids" {...a11yProps(2)} />
            <Tab label="Shoes" {...a11yProps(3)} />
            <Tab label="Watches" {...a11yProps(4)} />
            <Tab label="Shirts" {...a11yProps(5)} />
            <Tab label="Hoodie" {...a11yProps(6)} />
            <Tab label="Sneakers" {...a11yProps(7)} />
            {/* <Tab label="Sunglasses" {...a11yProps(8)} /> */}
            {/* <Tab label="Baby" {...a11yProps(9)} /> */}
          </Tabs>
        </AppBar>
      ) : (
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Men" {...a11yProps(0)} />
          <Tab label="Women" {...a11yProps(1)} />
          <Tab label="Kids" {...a11yProps(2)} />
          <Tab label="Shoes" {...a11yProps(3)} />
          <Tab label="Watches" {...a11yProps(4)} />
          <Tab label="Shirts" {...a11yProps(5)} />
          <Tab label="Hoodie" {...a11yProps(6)} />
          <Tab label="Sneakers" {...a11yProps(7)} />
          {/* <Tab label="Sunglasses" {...a11yProps(8)} /> */}
          {/* <Tab label="Baby" {...a11yProps(9)} /> */}
        </Tabs>
      )}
      <div ref={containerRef} />
    </div>
  );
};

export default Navbar;
