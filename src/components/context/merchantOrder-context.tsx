import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import { GET_MERCHANT_ORDER } from 'src/queries';

export interface IProps {
  orderId: string;
  createdAt: string;
  status: 'processing' | 'delivered' | 'cancelled';
  product: { newPrice: number; number: 'string' };
  account: { email: string };
}

interface IData {
  client: {
    getMerchantOrders: {
      orders: IProps[];
    };
  };
}

export const MerchantOrderContext = createContext({
  data: null,
  loading: false,
});

export const MerchantOrderProvider = ({ children }: any) => {
  const { loading, data } = useQuery(GET_MERCHANT_ORDER);

  if (loading) return <Typography>Loading...</Typography>;

  const {
    client: {
      getMerchantOrders: { orders },
    },
  }: IData = data;

  return (
    <>
      <MerchantOrderContext.Provider
        value={{
          data: orders,
          loading: loading,
        }}
      >
        {children}
      </MerchantOrderContext.Provider>
    </>
  );
};
