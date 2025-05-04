import { useCallback, useContext, useState } from 'react'
import type { Route } from './+types/product'
import CartContext from '~/components/cart/context'
import settings from '~/fixtures/settings'
import { single } from '~/fixtures/products'
import { Image } from '~/framework/link'

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

  const addBagHandler = useCallback(
    (price: number) => {
      const newNumber = Number(total) + price
      setTotal(newNumber)
    },
    [total, setTotal]
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl">
      <div className="w-full flex flex-col gap-0">
        <Image
          className="h-full object-cover rounded-md"
          src={loaderData.images?.[selectedImage] || ''}
        />
        <div className="previews gap-2 py-2 flex flex-nowrap overflow-x-auto w-full">
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
              <Image className="object-cover rounded-sm h-full w-full aspect-2/3" src={image} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-2/3 mx-auto">
        <h3 className="text-2xl font-bold my-2">{loaderData.name}</h3>
        <div className="font-medium my-2 mb-4">{settings.currency}192</div>
        <div dangerouslySetInnerHTML={{ __html: loaderData.description }}></div>
        <button
          onClick={() => {
            addBagHandler(192)
          }}
          type="submit"
          className="mt-5 sm:mt-10 w-full sm:w-auto btn-primary"
        >
          Add to bag
        </button>
      </div>
    </div>
  )
}
