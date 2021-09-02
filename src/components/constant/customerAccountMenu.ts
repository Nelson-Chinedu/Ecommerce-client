export type Props = {
  id: number;
  path: string;
  name: string;
};

export const customerAccountMenu: Props[] = [
  {
    id: 0,
    path: '/app/c/account',
    name: 'My Account',
  },
  {
    id: 1,
    path: '/app/c/orders',
    name: 'Orders',
  },
  {
    id: 2,
    path: '/app/c/inbox',
    name: 'Inbox',
  },
  {
    id: 3,
    path: '/app/c/saved-items',
    name: 'Saved Items',
  },
  {
    id: 4,
    path: '/app/c/coupon-code',
    name: 'Coupon Code',
  },
  {
    id: 5,
    path: '/app/c/recently-viewed',
    name: 'Recently Viewed',
  },
  {
    id: 6,
    path: '/app/c/details',
    name: 'Details',
  },
  {
    id: 7,
    path: '/app/c/address-book',
    name: 'Address Book',
  },
  {
    id: 8,
    path: '/app/c/change-password',
    name: 'Change Password',
  },
];
