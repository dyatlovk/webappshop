import { useContext, type JSX } from 'react'
import CartContext from './context'
import { ShoppingBagIcon } from '@heroicons/react/16/solid'
import settings from '~/fixtures/settings'
const CartIco = (): JSX.Element => {
  const { total, setTotal } = useContext(CartContext)

  return (
    <>
      <ShoppingBagIcon width={18} height={18} />
      <span className={'text-sm leading-none'}>{settings.currency}{total.toString()}</span>
    </>
  )
}

export default CartIco
