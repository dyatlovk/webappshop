import ProductCard from '~/components/shop/products/card'
import type { Route } from './+types/home'
import Pagination from '~/components/pagination/pages'
import { homeProducts } from '~/fixtures/products'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Home Page' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  return homeProducts()
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="max-w-2xl wrap sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
      <Pagination />
    </div>
  )
}
