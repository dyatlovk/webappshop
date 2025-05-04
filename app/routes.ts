import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  ...prefix('shop', [
    route('/:slug','routes/shop/list.tsx'),
    route('product/:id', 'routes/shop/product.tsx'),
  ]),
  route('cart', 'routes/cart.tsx'),
  route('checkout', 'routes/checkout.tsx'),
  route('columns', 'routes/columns.tsx'),
] satisfies RouteConfig
