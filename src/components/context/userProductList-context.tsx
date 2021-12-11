import { createContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import { GET_MEN_SUB_PRODUCTS, GET_WOMEN_SUB_PRODUCTS } from 'src/queries';

export const ProductListContext = createContext({
  menSubProducts: null,
  womenSubProducts: null,
  handleLoadMore: null,
  selected: null,
});

export const ProductListProvider = ({ children }: any) => {
  const [isSubMenCategory, setIsSubMenCategory] = useState(8);
  const [isSubWomenCategory, setIsSubWomenCategory] = useState(8);
  const [isSelected, setIsSelected] = useState(0);

  const { loading: loadingMen, data: menSubData } = useQuery(
    GET_MEN_SUB_PRODUCTS,
    {
      variables: {
        category: 'Men',
        take: isSubMenCategory,
        skip: 0,
      },
    }
  );

  const { loading: loadingWomen, data: womenSubData } = useQuery(
    GET_WOMEN_SUB_PRODUCTS,
    {
      variables: {
        category: 'Women',
        take: isSubWomenCategory,
        skip: 0,
      },
    }
  );

  if (loadingMen || loadingWomen) return <Typography>Loading...</Typography>;

  if (!menSubData || !womenSubData) return null;

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

  const handleLoadMore = (e: any, category: string) => {
    e.preventDefault();
    switch (category) {
      case 'men':
        setIsSubMenCategory(isSubMenCategory + 1);
        setIsSelected(0);
        break;
      case 'women':
        setIsSubWomenCategory(isSubWomenCategory + 1);
        setIsSelected(1);

        break;
      default:
        break;
    }
  };

  return (
    <>
      <ProductListContext.Provider
        value={{
          menSubProducts: menSubProducts,
          womenSubProducts: womenSubProducts,
          handleLoadMore: handleLoadMore,
          selected: isSelected,
        }}
      >
        {children}
      </ProductListContext.Provider>
    </>
  );
};
