import React, { createContext, useState } from 'react'

const CartContext = createContext<App.CartContext>({
  total: 0,
  setTotal: () => {},
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [total, setTotal] = useState<Number>(0)

  return (
    <CartContext.Provider value={{ total: total, setTotal: setTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
