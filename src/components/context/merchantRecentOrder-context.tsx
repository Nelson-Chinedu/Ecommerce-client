import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import { GET_MERCHANT_RECENT_ORDER } from 'src/queries';

export interface IProps {
  orderId: string;
  createdAt: string;
  status: 'processing' | 'delivered' | 'cancelled';
  account: { email: string };
  product: { newPrice: string };
}

interface IData {
  client: {
    getRecentOrders: {
      orders: IProps[];
    };
  };
}

export const MerchantRecentOrderContext = createContext({
  data: null,
  loading: false,
});

export const MerchantRecentOrderProvider = ({ children }: any) => {
  const { loading, data } = useQuery(GET_MERCHANT_RECENT_ORDER, {
    variables: { take: 5, skip: 0 },
  });

  if (loading) return <Typography>Loading...</Typography>;

  const {
    client: {
      getRecentOrders: { orders },
    },
  }: IData = data;

  return (
    <>
      <MerchantRecentOrderContext.Provider
        value={{
          data: orders,
          loading: loading,
        }}
      >
        {children}
      </MerchantRecentOrderContext.Provider>
    </>
  );
};
