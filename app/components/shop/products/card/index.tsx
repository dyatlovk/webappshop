import { useCallback, useContext, type JSX } from 'react'
import CartContext from '~/components/cart/context'
import styles from './style.module.css'
import classNames from 'classnames/bind'
import settings from '~/fixtures/settings'
import { Link } from 'react-router'
import { Image } from '~/framework/link'

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
    <div className="group relative border-border border rounded-md">
      <Link to={`/shop/product/${props.id}`}>
        <Image
          className="aspect-square w-full rounded-tl-sm rounded-tr-sm object-cover lg:aspect-auto lg:h-80"
          src={props.imageSrc}
        />
      </Link>

      <div className="p-4">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className={styles.title}>
              <Link to={`shop/product/${props.id}`}>{props.name}</Link>
            </h3>
            <div className={styles.layout}>
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
            <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
          </div>
        </div>
        <button
          onClick={() => {
            addBagHandler(Number(props.price))
          }}
          type="submit"
          className="btn-primary mt-3 w-full"
        >
          Add to bag
        </button>
      </div>
    </div>
  )
}

export default ProductCard
