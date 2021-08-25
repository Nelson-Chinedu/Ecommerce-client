import { action, makeAutoObservable } from 'mobx';
import productItems, { productItemWomen } from 'src/components/constant/productItems';

type ProductItems = typeof productItems[number];

export class UIStore {
  productItems: ProductItems[] = productItems;
  productItemsWoman: ProductItems[] = productItemWomen;
  sidenav: boolean = false;
  accordion: boolean = false;
  anchorPosition: string = undefined;
  collapseShipping: boolean = true;
  collapsePayment: boolean = true;
  passwordVisibilty: boolean = false;
  modalVisibility: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get favouriteCount() {
    return this.productItems.reduce((result, productItem) => {
      return productItem.favourite ? result + 1 : result;
    }, 0);
  }

  @action
  toggleFavouriteProduct(index: number) {
    this.productItems = [
      ...this.productItems.slice(0, index),
      {
        ...this.productItems[index],
        favourite: !this.productItems[index].favourite,
      },
      ...this.productItems.slice(index + 1),
    ];
  }

  @action
  toggleSideNav() {
    this.sidenav = !this.sidenav;
    return this.sidenav;
  }

  @action
  toggleAccordion() {
    this.accordion = !this.accordion;
    return this.accordion;
  }

  @action
  toggleCollapse(arg : string) {
    if (arg === 'shipping'){
      this.collapseShipping = !this.collapseShipping;
      return this.collapseShipping;
    } else if (arg === 'payment'){
      this.collapsePayment = !this.collapsePayment;
      return this.collapsePayment;
    }
  }

  @action
  togglePasswordVisibilty() {
    this.passwordVisibilty = !this.passwordVisibilty;
    return this.passwordVisibilty;
  }

  @action
  toggleModalVisibility() {
    this.modalVisibility = !this.modalVisibility;
    return this.modalVisibility;
  }
}
