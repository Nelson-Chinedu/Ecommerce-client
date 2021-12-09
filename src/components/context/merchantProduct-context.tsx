import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import { GET_PRODUCT } from 'src/queries';

export interface IProps {
  name: string;
  number: string | number;
  stock: 'In-stock' | 'Out-of-stock';
  category: string;
  newPrice: string | number;
}

interface IData {
  client: {
    getProduct: {
      products: IProps[];
    };
  };
}

export const MerchantProductContext = createContext({
  data: null,
  loading: false,
});

export const MerchantProductProvider = ({ children }: any) => {
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: {
      take: 10,
      skip: 0,
    },
  });

  if (loading) return <Typography>Loading...</Typography>;

  if (!data) return null;

  const {
    client: {
      getProduct: { products },
    },
  }: IData = data;

  return (
    <>
      <MerchantProductContext.Provider
        value={{
          data: products,
          loading: loading,
        }}
      >
        {children}
      </MerchantProductContext.Provider>
    </>
  );
};
