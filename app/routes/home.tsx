import ProductCard from '~/components/shop/products/card'
import type { Route } from './+types/home'
import { homeProducts } from '~/fixtures/products'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Home Page' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  return homeProducts()
}

export default function Home({ loaderData }: Route.ComponentProps) {
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
