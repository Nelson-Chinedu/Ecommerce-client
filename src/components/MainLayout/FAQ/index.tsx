import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputAdorment from '@material-ui/core/InputAdornment';
import Tabs from '@material-ui/core/Tabs';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Accordion from '@material-ui/core/Accordion';
import AddIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';

import TextInput from 'src/components/SharedLayout/TextInput';
import Navigation from 'src/components/SharedLayout/Navbar/MainNavbar';
import Footer from 'src/components/SharedLayout/Footer';
import Button from 'src/components/SharedLayout/Button';
import Newsletter from 'src/components/SharedLayout/Newsletter';
import { useStyles } from 'src/components/MainLayout/FAQ/styled.faq';
import {
  LinkTab,
  a11yProps,
  TabPanel,
} from 'src/components/MainLayout/FAQ/Tab';

import { faqs, Props as faqProp } from 'src/components/constant/faqs';
import { faqTabs, Props as faqTabProp} from 'src/components/constant/faqTabs';

const FAQ: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleAccordion = (id: number) => {
    setActive(id);
    setExpanded(!expanded);
  };

  return (
    <>
      <Navigation />
      <Container>
        <Box className={classes.root}>
          <Box className={classes.search}>
            <Typography variant="h6">FAQ &amp; Helps</Typography>
            <TextInput
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              type="text"
              className={classes.searchInput}
              placeholder="Ask a question"
              InputProps={{
                startAdornment: (
                  <InputAdorment position="end">
                    <SearchIcon />
                  </InputAdorment>
                ),
                endAdornment: (
                  <InputAdorment position="end">
                    <Button
                      variant="contained"
                      color="secondary"
                      disableElevation={true}
                      fullWidth
                    >
                      Search
                    </Button>
                  </InputAdorment>
                ),
              }}
            />
            <Typography variant="body2">
              Or choose a category to quickly find help you need
            </Typography>
          </Box>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tab"
          >
            {faqTabs.map((menu: faqTabProp, index: number) => (
              <LinkTab
                key={index}
                label={
                  <>
                    {menu.iconName} {menu.tabName}
                  </>
                }
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography variant="h5">Get Started page</Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h5">Shopping Info page</Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h5">Payment page</Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            {faqs.map((faq: faqProp, index: number) => (
              <Accordion
                key={index}
                expanded={index === active && expanded}
                onChange={() => handleAccordion(index)}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={
                    index === active ? <RemoveOutlinedIcon /> : <AddIcon />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography variant="body1">{faq.summary}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{faq.details}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Typography variant="h5">User Guide Page</Typography>
          </TabPanel>
          <Newsletter />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default FAQ;
