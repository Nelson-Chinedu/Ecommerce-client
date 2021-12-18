interface Product {
  readonly value: string;
  readonly label: string;
  readonly color?: string;
}

export const PPRODUCT_SIZES: Product[] = [
  { value: 'S', label: 'S', color: '#00B8D9' },
  { value: 'M', label: 'M', color: '#0052CC' },
  { value: 'L', label: 'L', color: '#5243AA' },
  { value: 'XL', label: 'XL', color: '#FF5630' },
];

export const COLORS: Product[] = [
  { value: 'Red', label: 'Red', color: '#00B8D9' },
  { value: 'Blue', label: 'Blue', color: '#0052CC' },
  { value: 'Gold', label: 'Gold', color: '#5243AA' },
  { value: 'Navy Blue', label: 'Navy Blue', color: '#FF5630' },
  { value: 'Black', label: 'Black', color: '#5243AA' },
  { value: 'Gray', label: 'Gray', color: '#5243AA' },
  { value: 'Yellow', label: 'Yellow', color: '#5243AA' },
  { value: 'White', label: 'White', color: '#5243AA' },
];

export const PRODUCT_TAGS: Product[] = [
  { value: 'Sneakers', label: 'Sneakers' },
  { value: 'Shoe', label: 'Shoe' },
  { value: 'Stylish', label: 'Stylish' },
  { value: 'Footwear', label: 'Footwear' },
  { value: 'Women', label: 'Women' },
  { value: 'Kids', label: 'Kids' },
  { value: 'Fashion', label: 'Fashion' },
];

export const PRODUCT_STOCK: Product[] = [
  { value: 'In-stock', label: 'In-Stock', color: '#00B8D9' },
  { value: 'Out-of-stock', label: 'Out-of-Stock', color: '#0052CC' },
];

export const PRODUCT_CATEGORY: Product[] = [
  { value: 'Men', label: 'Men', color: '#00B8D9' },
  { value: 'Women', label: 'Women', color: '#0052CC' },
  { value: 'Kids', label: 'Kids', color: '#5243AA' },
  { value: 'Shoes', label: 'Shoes', color: '#FF5630' },
  { value: 'Watches', label: 'Watches', color: '#FF5630' },
  { value: 'Shirts', label: 'Shirts', color: '#FF5630' },
  { value: 'Hoodie', label: 'Hoodie', color: '#FF5630' },
  { value: 'Sneakers', label: 'Sneakers', color: '#FF5630' },
];
