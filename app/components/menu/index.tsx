import type { JSX } from 'react'
import { NavLink } from 'react-router'

const MainMenu = (): JSX.Element => {
  return (
    <nav className="flex gap-2">
      <NavLink className="link" to={'/cart'}>
        Cart
      </NavLink>
      <NavLink className="link" to={'/checkout'}>
        Checkout
      </NavLink>
      <NavLink className="link" to={'/about'}>
        About
      </NavLink>
    </nav>
  )
}

export default MainMenu
