import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import { GET_PRODUCT_USER } from 'src/queries';

export const ProductPreviewContext = createContext({
  data: null,
  loading: false,
});

export const ProductPreviewProvider = ({ children }: any) => {
  const [productID, setProductID] = useState<string>('');
  const {
    query: { index: product },
  }: any = useRouter();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const splitProduct = product?.split('-');
      const id: string | undefined = splitProduct[splitProduct?.length - 1];
      setProductID(id);
    }
    return () => {
      isMounted = false;
    };
  }, [product]);

  const { data, loading } = useQuery(GET_PRODUCT_USER, {
    variables: {
      id: productID,
    },
  });

  if (loading) return <Typography>Loading...</Typography>;

  const {
    public: { getProduct },
  } = data;

  return (
    <>
      <ProductPreviewContext.Provider
        value={{
          data: getProduct,
          loading: loading,
        }}
      >
        {children}
      </ProductPreviewContext.Provider>
    </>
  );
};
