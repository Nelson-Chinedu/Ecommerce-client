import { FunctionComponent, useState, ChangeEvent, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FavouriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined';
// import FavouriteIcon from '@material-ui/icons/Favorite';

import Navbar from 'src/components/MainLayout/TopCategory/Navbar';
import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

import Button from 'src/components/SharedLayout/Button';

import { useStore } from 'src/store';
import { ProductListContext } from 'src/components/context/userProductList-context';

// type Props = {
//   id: number;
//   imagePath: string;
//   productName: string;
//   productPrice: string;
//   favourite: boolean;
// };

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
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
  const classes = useStyles();
  const { uiStore } = useStore();
  const { data } = useContext(ProductListContext);
  const [value, setValue] = useState(0);

  const handleAddFavourite = (e: any, index: number) => {
    e.stopPropagation();
    uiStore.toggleFavouriteProduct(index);
  };

  // const handleRemoveFavourite = (e: any, index: number) => {
  //   e.stopPropagation();
  //   uiStore.toggleFavouriteProduct(index);
  // };

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar handleChange={handleChange} value={value} />
      <TabPanel value={value} index={0}>
        <Grid
          container
          spacing={3}
          style={{ margin: '2em auto', width: '90%' }}
        >
          {data
            .filter((product: any) => product.category.toLowerCase() === 'men')
            .map((product: any, index: number) => (
              <Link href={`/product-detail?q=${product.id}`} key={index}>
                <Grid item sm={3} style={{ margin: '0px' }} key={index}>
                  <Grid container className={classes.productContainer}>
                    <Box>
                      <Image
                        src={`${
                          product.imageUrl === null
                            ? 'https://via.placeholder.com/40x50'
                            : product.imageUrl
                            ? product.imageUrl
                            : 'https://via.placeholder.com/40x50'
                        }`}
                        objectFit="cover"
                        loading="eager"
                        width={300}
                        height={250}
                      />
                    </Box>
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: '10px 10px' }}
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography>{product.name}</Typography>
                        <Typography>${product.newPrice}</Typography>
                      </Grid>
                      <Grid item>
                        <FavouriteIconOutlined
                          onClick={(e) => handleAddFavourite(e, index)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.btnLoadMore}
          >
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
              >
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          spacing={3}
          style={{ margin: '2em auto', width: '90%' }}
        >
          {data
            .filter(
              (product: any) => product.category.toLowerCase() === 'women'
            )
            .map((product: any, index: number) => (
              <Link href="/product-detail" key={index}>
                <Grid item sm={3} style={{ margin: '0px' }} key={index}>
                  <Grid container className={classes.productContainer}>
                    <Box>
                      <Image
                        src={`${
                          product.imageUrl === null
                            ? 'https://via.placeholder.com/40x50'
                            : product.imageUrl
                            ? product.imageUrl
                            : 'https://via.placeholder.com/40x50'
                        }`}
                        objectFit="cover"
                        loading="eager"
                        width={300}
                        height={250}
                      />
                    </Box>
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: '10px 10px' }}
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography>{product.name}</Typography>
                        <Typography>${product.newPrice}</Typography>
                      </Grid>
                      <Grid item>
                        <FavouriteIconOutlined
                          onClick={(e) => handleAddFavourite(e, index)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.btnLoadMore}
          >
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
              >
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid
          container
          spacing={3}
          style={{ margin: '2em auto', width: '90%' }}
        >
          {data
            .filter(
              (product: any) => product.category.toLowerCase() === 'makeup'
            )
            .map((product: any, index: number) => (
              <Link href="/product-detail" key={index}>
                <Grid item sm={3} style={{ margin: '0px' }} key={index}>
                  <Grid container className={classes.productContainer}>
                    <Box>
                      <Image
                        src={`${
                          product.imageUrl === null
                            ? 'https://via.placeholder.com/40x50'
                            : product.imageUrl
                            ? product.imageUrl
                            : 'https://via.placeholder.com/40x50'
                        }`}
                        objectFit="cover"
                        loading="eager"
                        width={300}
                        height={250}
                      />
                    </Box>
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: '10px 10px' }}
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography>{product.name}</Typography>
                        <Typography>${product.newPrice}</Typography>
                      </Grid>
                      <Grid item>
                        <FavouriteIconOutlined
                          onClick={(e) => handleAddFavourite(e, index)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.btnLoadMore}
          >
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
              >
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid
          container
          spacing={3}
          style={{ margin: '2em auto', width: '90%' }}
        >
          {data
            .filter(
              (product: any) => product.category.toLowerCase() === 'hair-care'
            )
            .map((product: any, index: number) => (
              <Link href="/product-detail" key={index}>
                <Grid item sm={3} style={{ margin: '0px' }} key={index}>
                  <Grid container className={classes.productContainer}>
                    <Box>
                      <Image
                        src={`${
                          product.imageUrl === null
                            ? 'https://via.placeholder.com/40x50'
                            : product.imageUrl
                            ? product.imageUrl
                            : 'https://via.placeholder.com/40x50'
                        }`}
                        objectFit="cover"
                        loading="eager"
                        width={300}
                        height={250}
                      />
                    </Box>
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: '10px 10px' }}
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography>{product.name}</Typography>
                        <Typography>${product.newPrice}</Typography>
                      </Grid>
                      <Grid item>
                        <FavouriteIconOutlined
                          onClick={(e) => handleAddFavourite(e, index)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.btnLoadMore}
          >
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
              >
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid
          container
          spacing={3}
          style={{ margin: '2em auto', width: '90%' }}
        >
          {data
            .filter(
              (product: any) => product.category.toLowerCase() === 'skin-care'
            )
            .map((product: any, index: number) => (
              <Link href="/product-detail" key={index}>
                <Grid item sm={3} style={{ margin: '0px' }} key={index}>
                  <Grid container className={classes.productContainer}>
                    <Box>
                      <Image
                        src={`${
                          product.imageUrl === null
                            ? 'https://via.placeholder.com/40x50'
                            : product.imageUrl
                            ? product.imageUrl
                            : 'https://via.placeholder.com/40x50'
                        }`}
                        objectFit="cover"
                        loading="eager"
                        width={300}
                        height={250}
                      />
                    </Box>
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: '10px 10px' }}
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography>{product.name}</Typography>
                        <Typography>${product.newPrice}</Typography>
                      </Grid>
                      <Grid item>
                        <FavouriteIconOutlined
                          onClick={(e) => handleAddFavourite(e, index)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.btnLoadMore}
          >
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
              >
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid
          container
          spacing={3}
          style={{ margin: '2em auto', width: '90%' }}
        >
          {data
            .filter((product: any) => product.category.toLowerCase() === 'bags')
            .map((product: any, index: number) => (
              <Link href="/product-detail" key={index}>
                <Grid item sm={3} style={{ margin: '0px' }} key={index}>
                  <Grid container className={classes.productContainer}>
                    <Box>
                      <Image
                        src={`${
                          product.imageUrl === null
                            ? 'https://via.placeholder.com/40x50'
                            : product.imageUrl
                            ? product.imageUrl
                            : 'https://via.placeholder.com/40x50'
                        }`}
                        objectFit="cover"
                        loading="eager"
                        width={300}
                        height={250}
                      />
                    </Box>
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: '10px 10px' }}
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography>{product.name}</Typography>
                        <Typography>${product.newPrice}</Typography>
                      </Grid>
                      <Grid item>
                        <FavouriteIconOutlined
                          onClick={(e) => handleAddFavourite(e, index)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.btnLoadMore}
          >
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
              >
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Grid
          container
          spacing={3}
          style={{ margin: '2em auto', width: '90%' }}
        >
          {data
            .filter((product: any) => product.category.toLowerCase() === 'baby')
            .map((product: any, index: number) => (
              <Link href="/product-detail" key={index}>
                <Grid item sm={3} style={{ margin: '0px' }} key={index}>
                  <Grid container className={classes.productContainer}>
                    <Box>
                      <Image
                        src={`${
                          product.imageUrl === null
                            ? 'https://via.placeholder.com/40x50'
                            : product.imageUrl
                            ? product.imageUrl
                            : 'https://via.placeholder.com/40x50'
                        }`}
                        objectFit="cover"
                        loading="eager"
                        width={300}
                        height={250}
                      />
                    </Box>
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: '10px 10px' }}
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography>{product.name}</Typography>
                        <Typography>${product.newPrice}</Typography>
                      </Grid>
                      <Grid item>
                        <FavouriteIconOutlined
                          onClick={(e) => handleAddFavourite(e, index)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.btnLoadMore}
          >
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
              >
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Grid
          container
          spacing={3}
          style={{ margin: '2em auto', width: '90%' }}
        >
          {data
            .filter(
              (product: any) => product.category.toLowerCase() === 'watches'
            )
            .map((product: any, index: number) => (
              <Link href="/product-detail" key={index}>
                <Grid item sm={3} style={{ margin: '0px' }} key={index}>
                  <Grid container className={classes.productContainer}>
                    <Box>
                      <Image
                        src={`${
                          product.imageUrl === null
                            ? 'https://via.placeholder.com/40x50'
                            : product.imageUrl
                            ? product.imageUrl
                            : 'https://via.placeholder.com/40x50'
                        }`}
                        objectFit="cover"
                        loading="eager"
                        width={300}
                        height={250}
                      />
                    </Box>
                    <Grid
                      container
                      justify="space-between"
                      style={{ padding: '10px 10px' }}
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography>{product.name}</Typography>
                        <Typography>${product.newPrice}</Typography>
                      </Grid>
                      <Grid item>
                        <FavouriteIconOutlined
                          onClick={(e) => handleAddFavourite(e, index)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.btnLoadMore}
          >
            <Grid item sm={4}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
              >
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
    </>
  );
};

export default observer(Product);
