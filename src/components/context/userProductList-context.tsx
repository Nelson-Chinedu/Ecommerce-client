import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import {
  GET_MEN_SUB_PRODUCTS,
  GET_WOMEN_SUB_PRODUCTS,
  GET_KID_SUB_PRODUCTS,
  GET_SHOE_SUB_PRODUCTS,
  GET_WATCH_SUB_PRODUCTS,
  GET_SHIRT_SUB_PRODUCTS,
  GET_HOODIE_SUB_PRODUCTS,
  GET_SNEAKER_SUB_PRODUCTS,
} from 'src/queries';

export const ProductListContext = createContext({
  menSubProducts: null,
  womenSubProducts: null,
  kidSubProducts: null,
  shoeSubProducts: null,
  watchSubProducts: null,
  shirtSubProducts: null,
  hoodieSubProducts: null,
  sneakerSubProducts: null,
});

export const ProductListProvider = ({ children }: any) => {
  const { loading: loadingMen, data: menSubData } = useQuery(
    GET_MEN_SUB_PRODUCTS,
    {
      variables: {
        category: 'Men',
        take: 8,
        skip: 0,
      },
    }
  );

  const { loading: loadingWomen, data: womenSubData } = useQuery(
    GET_WOMEN_SUB_PRODUCTS,
    {
      variables: {
        category: 'Women',
        take: 8,
        skip: 0,
      },
    }
  );

  const { loading: loadingKid, data: kidSubData } = useQuery(
    GET_KID_SUB_PRODUCTS,
    {
      variables: {
        category: 'Kids',
        take: 8,
        skip: 0,
      },
    }
  );

  const { loading: loadingShoe, data: shoeSubData } = useQuery(
    GET_SHOE_SUB_PRODUCTS,
    {
      variables: {
        category: 'Shoes',
        take: 8,
        skip: 0,
      },
    }
  );

  const { loading: loadingWatch, data: watchSubData } = useQuery(
    GET_WATCH_SUB_PRODUCTS,
    {
      variables: {
        category: 'Watches',
        take: 8,
        skip: 0,
      },
    }
  );

  const { loading: loadingShirt, data: shirtSubData } = useQuery(
    GET_SHIRT_SUB_PRODUCTS,
    {
      variables: {
        category: 'Shirts',
        take: 8,
        skip: 0,
      },
    }
  );

  const { loading: loadingHoodie, data: hoodieSubData } = useQuery(
    GET_HOODIE_SUB_PRODUCTS,
    {
      variables: {
        category: 'Hoodie',
        take: 8,
        skip: 0,
      },
    }
  );

  const { loading: loadingSneaker, data: sneakerSubData } = useQuery(
    GET_SNEAKER_SUB_PRODUCTS,
    {
      variables: {
        category: 'Sneakers',
        take: 8,
        skip: 0,
      },
    }
  );

  if (
    loadingMen ||
    loadingWomen ||
    loadingKid ||
    loadingShoe ||
    loadingWatch ||
    loadingShirt ||
    loadingHoodie ||
    loadingSneaker
  )
    return <Typography>Loading...</Typography>;

  if (
    !menSubData ||
    !womenSubData ||
    !kidSubData ||
    !shoeSubData ||
    !watchSubData ||
    !shirtSubData ||
    !hoodieSubData ||
    !sneakerSubData
  )
    return null;

  const {
    public: {
      getMenProducts: { products: menSubProducts },
    },
  } = menSubData;

  const {
    public: {
      getWomenProducts: { products: womenSubProducts },
    },
  } = womenSubData;

  const {
    public: {
      getKidProducts: { products: kidSubProducts },
    },
  } = kidSubData;

  const {
    public: {
      getShoeProducts: { products: shoeSubProducts },
    },
  } = shoeSubData;

  const {
    public: {
      getWatchProducts: { products: watchSubProducts },
    },
  } = watchSubData;

  const {
    public: {
      getShirtProducts: { products: shirtSubProducts },
    },
  } = shirtSubData;

  const {
    public: {
      getHoodieProducts: { products: hoodieSubProducts },
    },
  } = hoodieSubData;

  const {
    public: {
      getSneakerProducts: { products: sneakerSubProducts },
    },
  } = sneakerSubData;

  return (
    <>
      <ProductListContext.Provider
        value={{
          menSubProducts: menSubProducts,
          womenSubProducts: womenSubProducts,
          kidSubProducts: kidSubProducts,
          shoeSubProducts: shoeSubProducts,
          watchSubProducts: watchSubProducts,
          shirtSubProducts: shirtSubProducts,
          hoodieSubProducts: hoodieSubProducts,
          sneakerSubProducts: sneakerSubProducts,
        }}
      >
        {children}
      </ProductListContext.Provider>
    </>
  );
};
