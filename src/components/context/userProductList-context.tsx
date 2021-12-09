import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import { GET_ALL_PRODUCTS } from 'src/queries';

export const ProductListContext = createContext({
  data: null,
});

export const ProductListProvider = ({ children }: any) => {
  const { loading, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: {
      take: 10,
      skip: 0,
    },
  });

  if (loading) return <Typography>Loading...</Typography>;

  if (!data) return null;

  const {
    public: {
      getProducts: { products },
    },
  } = data;

  return (
    <>
      <ProductListContext.Provider
        value={{
          data: products,
        }}
      >
        {children}
      </ProductListContext.Provider>
    </>
  );
};
