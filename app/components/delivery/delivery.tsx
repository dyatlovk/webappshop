import { useCallback, useState } from 'react'
import type { JSX } from 'react'
import NewPost from '~/components/delivery/newpost'
import styles from './delivery.module.css'
import classNames from 'classnames/bind'
import settings from '~/fixtures/settings'
const cx = classNames.bind(styles)

const Delivery = (): JSX.Element => {
  const [selected, setSelected] = useState<number>(1)

  const handler = useCallback((e: React.MouseEvent<HTMLLabelElement>) => {
    const input = e.currentTarget.querySelector('input')
    if (input) {
      setSelected(Number(input.value))
      input.checked = true
    }
  }, [])

  return (
    <div className="flex flex-col">
      <label
        className={cx(styles.default, selected === 1 ? "bg-mid" : "")}
        onClick={handler}
      >
        <div className="flex flex-row gap-2 justify-between w-full">
          <input
            className="pointer-events-none"
            type="radio"
            name="delivery"
            value="1"
            checked={true}
            readOnly={true}
          />
          <div className="flex justify-between w-full">
            <span>Self</span>
            <span>{settings.currency}0</span>
          </div>
        </div>
      </label>

      <label
        className={cx(styles.default, 'flex-col', selected === 2 ? "bg-mid text-secondary" : "")}
        onClick={handler}
      >
        <div className="flex flex-row gap-2 justify-between w-full">
          <input
            className="pointer-events-none"
            type="radio"
            name="delivery"
            value="2"
            readOnly={true}
          />
          <div className="flex justify-between w-full">
            <span>New Post</span>
            <span>{settings.currency}30</span>
          </div>
        </div>
        {selected === 2 ? <NewPost /> : ''}
      </label>

      <label
        className={cx(styles.default, selected === 3 ? "bg-mid" : "")}
        onClick={handler}
      >
        <input
          className="pointer-events-none"
          type="radio"
          name="delivery"
          value="3"
          readOnly={true}
        />
        <div className="flex justify-between w-full">
          <span>Another Post</span>
          <span>{settings.currency}40</span>
        </div>
      </label>
    </div>
  )
}

export default Delivery
