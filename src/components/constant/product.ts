interface Product {
  readonly value: string;
  readonly label: string;
  readonly color: string;
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
];

export const PRODUCT_TAGS: Product[] = [
  { value: 'Sneakers', label: 'Sneakers', color: '#00B8D9' },
  { value: 'Shoe', label: 'Shoe', color: '#0052CC' },
  { value: 'Stylish', label: 'Stylish', color: '#5243AA' },
  { value: 'Footwear', label: 'Footwear', color: '#FF5630' },
  { value: 'Women', label: 'Women', color: '#FF5630' },
];

export const PRODUCT_STOCK: Product[] = [
  { value: 'In-stock', label: 'In-Stock', color: '#00B8D9' },
  { value: 'Out-of-Stock', label: 'Out-of-Stock', color: '#0052CC' },
];

export const PRODUCT_CATEGORY: Product[] = [
  { value: 'Men', label: 'Men', color: '#00B8D9' },
  { value: 'Women', label: 'Women', color: '#0052CC' },
  { value: 'Makeup', label: 'Makeup', color: '#5243AA' },
  { value: 'Hair Care', label: 'Hair Care', color: '#FF5630' },
  { value: 'Skin Care', label: 'Skin Care', color: '#FF5630' },
  { value: 'Brand Shop', label: 'Brand Shop', color: '#FF5630' },
  { value: 'Baby', label: 'Baby', color: '#FF5630' },
  { value: 'Watches', label: 'Watches', color: '#FF5630' },
];
