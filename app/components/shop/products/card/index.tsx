import { useCallback, useContext, type JSX } from 'react'
import CartContext from '~/components/cart/context'
import styles from './style.module.css'
import classNames from 'classnames/bind'
import settings from '~/fixtures/settings'
import { Link } from 'react-router'
import { Image } from '~/framework/link'
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/16/solid'

const cx = classNames.bind(styles)

const ProductCard = (props: Shop.Product): JSX.Element => {
  const { total, setTotal } = useContext(CartContext)

  const addBagHandler = useCallback(
    (price: number) => {
      const newNumber = Number(total) + price
      setTotal(newNumber)
    },
    [total, setTotal]
  )

  return (
    <div className="relative rounded-md flex flex-col">
      <Link to={`/shop/product/${props.id}`} className="w-full">
        <Image
          className="aspect-square sm:aspect-2/3 w-full rounded-sm object-cover h-80"
          src={props.imageSrc}
        />
      </Link>

      <div className="flex flex-col flex-grow">
        <div className="py-4 px-2 flex flex-col justify-between flex-grow">
          <h3 className={styles.title}>
            <Link to={`shop/product/${props.id}`}>{props.name}</Link>
          </h3>
          <div
            className="text-base md:text-xs text-secondary/60"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></div>
        </div>
        <button
          onClick={() => {
            addBagHandler(Number(props.price))
          }}
          type="submit"
          className="px-2 w-full flex flex-row justify-between items-center gap-2"
        >
          <div className="flex flex-row gap-2 items-baseline">
            <p className={cx(styles.price)}>
              {settings.currency}
              {props.price}
            </p>
            {props.oldPrice ? (
              <p className={styles.old_price}>
                {settings.currency}
                {props.oldPrice}
              </p>
            ) : (
              ''
            )}
          </div>
          <ShoppingCartIcon width={18} height={18} fill="currentColor" className="fill-accent" />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
