import type { JSX, PropsWithChildren } from 'react'
import { Link, NavLink, type NavLinkRenderProps } from 'react-router'
import settings from '~/fixtures/settings'

interface Props {
  to: string
  className?: string | ((props: NavLinkRenderProps) => string | undefined)
  onClick?: (() => void) | undefined
}

const MyNavLink = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <NavLink to={settings.basePath + props.to} className={props.className} onClick={props.onClick}>
      {props.children}
    </NavLink>
  )
}

interface LinkProps {
  to: string
  className?: string
  onClick?: (() => void) | undefined
}
const MyLink = (props: PropsWithChildren<LinkProps>): JSX.Element => {
  return (
    <Link to={settings.basePath + props.to} className={props.className}>
      {props.children}
    </Link>
  )
}

export { MyNavLink, MyLink }
