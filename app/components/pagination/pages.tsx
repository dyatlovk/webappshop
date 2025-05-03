import type { JSX } from 'react'
import { Link } from 'react-router'
import styles from './style.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface Props {
  current?: number
  total?: number
}

const Pagination = (props: Props): JSX.Element => {
  return (
    <div className={cx(styles.layout)}>
      <Link className={cx(styles.button)} to={'#'}>
        Prev
      </Link>
      <Link className={cx(styles.button)} to={'#'}>
        Next
      </Link>
    </div>
  )
}

export default Pagination
