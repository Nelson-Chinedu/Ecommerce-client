import React, { FunctionComponent, useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Footer from 'src/components/SharedLayout/Footer';

import { productDetails } from 'src/components/constant/productDetails';

import Description from 'src/components/MainLayout/Product/Description';
import { useStyles } from 'src/components/MainLayout/Product/styled.productDetail';
import { Props } from 'src/components/constant/productDetails';

import { ProductPreviewContext } from 'src/components/context/productPreview-context';

import { useStore } from 'src/store';

interface IContext {
  data: {
    name: string;
    number: number;
    description: string;
    oldPrice: string;
    newPrice: string;
    imageUrl: string;
    category: string;
    colors: string[];
    sizes: string[];
  };
  loading: boolean;
}

const ProductDetail: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const [active, setActive] = useState<number>(null);
  const { data } = useContext<IContext>(ProductPreviewContext);

  const handleToggle = (id: number) => {
    setActive(id);
    uiStore.toggleAccordion();
  };
  if (data === null) return <Typography>You seem to be lost</Typography>;
  return (
    <>
      <Navigation />
      <Box className={classes.root}>
        <Description />
        <Grid container className={classes.divider}>
          <Grid item sm={12}>
            <Divider />
          </Grid>
        </Grid>

        {productDetails.map((product: Props, index: number) => (
          <Grid container key={index}>
            <Grid item sm={12}>
              <Accordion
                expanded={index === active && uiStore.accordion}
                onChange={() => handleToggle(index)}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={
                    index === active && uiStore.accordion ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon />
                    )
                  }
                  aria-controls="accordion-content"
                  style={{
                    background: '#fff',
                    padding: '2em 0px',
                  }}
                >
                  <Typography variant="h6">{product.summary}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2">{product.details}</Typography>
                </AccordionDetails>
              </Accordion>
              <Divider />
            </Grid>
          </Grid>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default observer(ProductDetail);
