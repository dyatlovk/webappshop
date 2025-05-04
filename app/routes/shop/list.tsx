import type { Route } from './+types/list'
import ProductCard from '~/components/shop/products/card'
import { listProducts } from '~/fixtures/products'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'List Page' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  return listProducts()
}

export default function List({ loaderData }: Route.ComponentProps) {
  return (
    <div className="goods-grid">
      {loaderData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          description={product.description}
          imageAlt={product.imageAlt}
          imageSrc={product.imageSrc}
          name={product.name}
          price={product.price}
          oldPrice={product.oldPrice}
        />
      ))}
    </div>
  )
}
