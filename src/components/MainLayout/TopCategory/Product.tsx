import { FunctionComponent, useState, ChangeEvent, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Navbar from 'src/components/MainLayout/TopCategory/Navbar';
import ProductTemplate from 'src/components/MainLayout/TopCategory/ProductTemplate';

import { ProductListContext } from 'src/components/context/userProductList-context';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value?: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Product: FunctionComponent<{}> = () => {
  const {
    menSubProducts,
    womenSubProducts,
    kidSubProducts,
    shoeSubProducts,
    watchSubProducts,
    shirtSubProducts,
    hoodieSubProducts,
    sneakerSubProducts,
  } = useContext(ProductListContext);
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar handleChange={handleChange} value={value} />
      <TabPanel value={value} index={0}>
        <ProductTemplate category="men" data={menSubProducts} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductTemplate category="women" data={womenSubProducts} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductTemplate category="kids" data={kidSubProducts} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProductTemplate category="shoes" data={shoeSubProducts} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProductTemplate category="watches" data={watchSubProducts} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ProductTemplate category="shirts" data={shirtSubProducts} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ProductTemplate category="hoodie" data={hoodieSubProducts} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ProductTemplate category="sneakers" data={sneakerSubProducts} />
      </TabPanel>
    </>
  );
};

export default observer(Product);
