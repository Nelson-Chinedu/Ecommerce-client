export type Props = {
  no: number;
  product: string;
  price: string;
  quantity: number;
  subtotal: string;
  action: string;
}

export const carts: Array<Props> = [
  {
    no: 1,
    product: 'Cindrella Anti-Aging Skin',
    price: '$150.00',
    quantity: 1,
    subtotal: '$150.00',
    action: 'Remove'
  },
  {
    no: 2,
    product: 'Easy &amp Comfort Sweater',
    price: '$100.00',
    quantity: 1,
    subtotal: '$100.00',
    action: 'Remove'
  },
  {
    no: 1,
    product: 'Pure Scarf',
    price: '$49.00',
    quantity: 2,
    subtotal: '$49.00',
    action: 'Remove'
  },
]