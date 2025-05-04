import Order from '~/components/shop/products/order'
import type { Route } from './+types/cart'
import { useCallback, useState } from 'react'
import Delivery from '~/components/delivery/delivery'
import settings from '~/fixtures/settings'
import { cart } from '~/fixtures/products'
import { NavLink } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Cart Page' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  return cart()
}

export default function Cart({ loaderData }: Route.ComponentProps) {
  const [data, setData] = useState(loaderData)

  const onClose = useCallback((id: number) => {
    setData((prevData) => prevData.filter((el) => el.id !== id))
  }, [])

  return (
    <div className="flex flex-col max-w-5xl w-full">
      <h1>Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 @container">
        <div>
          <div className="flex flex-col">
            {data.map((product) => (
              <Order
                key={product.id}
                id={product.id}
                description={product.description}
                href={`/shop/product/${product.id}`}
                imageAlt=""
                imageSrc={product.imageSrc}
                name={product.name}
                price={product.price}
                onClose={onClose}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full lg:w-2/3 mx-auto">
          <div className="p-0">
            <h2 className="font-normal mb-4">Delivery</h2>
            <Delivery />
          </div>
          <div className="max-w-full px-4 py-6 bg-mid rounded-md">
            <h2 className="font-normal">Order summary</h2>
            <div className="mt-3 mb-3">
              <div className="total flex flex-grow gap-2 justify-between py-4 border-b border-border">
                <div>Delivery Total</div>
                <div>{settings.currency}112.32</div>
              </div>
              <div className="total flex flex-grow gap-2 justify-between py-4 border-b border-border">
                <div>Order total</div>
                <div>{settings.currency}100</div>
              </div>
              <div className="total flex flex-grow gap-2 justify-between py-4">
                <div>Total</div>
                <div>{settings.currency}112.32</div>
              </div>
            </div>
            <NavLink to="/checkout" className="btn-primary">
              Checkout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
