export const ROUTES = {
  home: '/',
  category: (name: string = '') => (name ? `/category/${name}` : '/category/:categoryName'),
  product: (name: string = '') => (name ? `/product/${name}` : '/product/:productName'),
  checkout: '/checkout',
  error: '*',
}
