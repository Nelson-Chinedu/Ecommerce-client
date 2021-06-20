import { action, makeAutoObservable } from 'mobx';
import productItems from 'src/components/constant/productItems';

type ProductItems = typeof productItems[number]

export class UserStore {

  productItems: ProductItems[] = productItems;
  
  constructor () {  
    makeAutoObservable(this)
  }

  get favouriteCount() {
    return this.productItems.reduce((result, productItem) => {
      return productItem.favourite ? result + 1 : result
    },0)
  }

  @action 
  toggleFavouriteProduct(index: number){
    this.productItems = [
      ...this.productItems.slice(0, index),
      {
        ...this.productItems[index],
        favourite: !this.productItems[index].favourite
      },
      ...this.productItems.slice(index + 1)
    ];
  }

}