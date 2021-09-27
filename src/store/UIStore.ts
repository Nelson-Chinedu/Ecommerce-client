import { action, makeAutoObservable } from 'mobx';
import {
  productItemsMen,
  productItemWomen,
  productItemMakeup,
  productLists,
} from 'src/components/constant/productItems';

import { orderList } from 'src/components/constant/orders';

type ProductItemsMen = typeof productItemsMen[number];
type ProductItemsWomen = typeof productItemsMen[number];
type ProductItemsMakeup = typeof productItemsMen[number];
type ProductLists = typeof productLists[number];
type OrderLists = typeof orderList[number];

export class UIStore {
  productItemsMen: ProductItemsMen[] = productItemsMen;
  productItemsWomen: ProductItemsWomen[] = productItemWomen;
  productItemsMakeup: ProductItemsMakeup[] = productItemMakeup;
  productLists: ProductLists[] = productLists;
  orderLists: OrderLists[] = orderList;
  sidenav: boolean = false;
  accordion: boolean = false;
  anchorPosition: string = undefined;
  collapseShipping: boolean = true;
  collapsePayment: boolean = true;
  passwordVisibilty: boolean = false;
  modalVisibility: boolean = false;
  privacyButton: boolean = false;
  isLoggedIn: boolean = false;
  loggedMessage: string = '';
  notification: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get favouriteCount() {
    return this.productItemsMen.reduce((result, productItem) => {
      return productItem.favourite ? result + 1 : result;
    }, 0);
  }

  @action
  toggleFavouriteProduct(index: number) {
    this.productItemsMen = [
      ...this.productItemsMen.slice(0, index),
      {
        ...this.productItemsMen[index],
        favourite: !this.productItemsMen[index].favourite,
      },
      ...this.productItemsMen.slice(index + 1),
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
  toggleCollapse(arg: string) {
    if (arg === 'shipping') {
      this.collapseShipping = !this.collapseShipping;
      return this.collapseShipping;
    } else if (arg === 'payment') {
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

  @action
  togglePrivacyButton() {
    this.privacyButton = !this.privacyButton;
    return this.privacyButton;
  }

  @action
  toggleNotification(message: string) {
    this.notification = !this.notification;
    this.loggedMessage = message;
    return this.notification;
  }

  @action
  loggedIn() {
    this.isLoggedIn = !this.isLoggedIn;
    return this.isLoggedIn;
  }
}
