export const ROUTES = {
  home: '/',
  category: (name: string = '') => (name ? `/category/${name}` : '/category/:productName'),
  product: (id: number = 0) => (id ? `/product/${id}` : '/product/:productId'),
  checkout: '/checkout',
}
