import { useCallback, type JSX } from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import settings from '~/fixtures/settings'
import { generatePath, Link } from 'react-router'
import { Image } from '~/framework/link'

interface Props {
  id: number
  name: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
  price: string
  onClose?: (id: number) => void
}

const Order = (props: Props): JSX.Element => {
  const onCloseHandler = useCallback(
    (id: number) => {
      if (props.onClose) props.onClose(id)
    },
    [props]
  )

  return (
    <div className="flex flex-row gap-5 py-6 box-border border-border border-b">
      <div className="img w-20 min-w-20 rounded-md">
        <Link to={`/shop/product/${props.id}`}>
          <Image src={props.imageSrc} className="object-cover w-full h-full rounded-md" />
        </Link>
      </div>

      <div className="info w-full">
        <h3 className="mb-2">
          <Link to={`/shop/product/${props.id}`}>{props.name}</Link>
        </h3>
        <p className="mt-3">{settings.currency}{props.price}</p>
      </div>

      <div className="close">
        <button
          onClick={() => {
            onCloseHandler(props.id)
          }}
          type="button"
          className="p-4 focus:bg-gray-700 rounded-md"
        >
          <XMarkIcon width={12} height={12} className='fill-gray-200' />
        </button>
      </div>
    </div>
  )
}

export default Order
