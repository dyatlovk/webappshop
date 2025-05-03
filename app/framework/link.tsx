import { type JSX, useContext } from 'react'
import { UNSAFE_NavigationContext } from 'react-router'

interface ImageProps {
  src: string
  className?: string
  alt?: string
}

const Image = (props: ImageProps): JSX.Element => {
  let { basename } = useContext(UNSAFE_NavigationContext)
  let href = basename + props.src
  href = href.replace('//', '/')

  return <img className={props.className} src={href} alt={props.alt} />
}

export { Image }
