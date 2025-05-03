import { useCallback, useContext, useState } from 'react'
import type { Route } from './+types/product'
import CartContext from '~/components/cart/context'
import settings from '~/fixtures/settings'
import { single } from '~/fixtures/products'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Product Page' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  return single()
}

export default function Product({ loaderData }: Route.ComponentProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const { total, setTotal } = useContext(CartContext)

  const imageHandler = useCallback((id: number) => {
    setSelectedImage(id)
  }, [])

  const addBagHandler = useCallback((price: number) => {
    const newNumber = Number(total) + price
    setTotal(newNumber)
  }, [total, setTotal])

  return (
    <div>
      <div className="images flex flex-col gap-0">
        <img
          className="h-90 object-cover"
          src={loaderData.images?.[selectedImage] || ''}
        />
        
        <div className="previews wrap gap-2 p-2 flex flex-nowrap w-screen overflow-x-auto">
          {loaderData.images?.map((image: string, id: number) => (
            <div
              key={id}
              className={
                selectedImage === id
                  ? 'border-2 border-accent rounded-md w-[75px] min-w-[75px]'
                  : 'border-2 border-transparent rounded-md w-[75px] min-w-[75px]'
              }
              onClick={() => {
                imageHandler(id)
              }}
            >
              <img
                className="object-cover rounded-sm h-[90px] w-full"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <h3 className="text-2xl font-bold my-2">Basic Tee 6-Pack</h3>
        <div className="font-medium my-2 mb-4">{settings.currency}192</div>
        <div>
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for
            laundry day.
          </p>
        </div>
        <button
          onClick={() => {
            addBagHandler(192)
          }}
          type="submit"
          className="mt-10 w-full btn-primary"
        >
          Add to bag
        </button>
      </div>
    </div>
  )
}
