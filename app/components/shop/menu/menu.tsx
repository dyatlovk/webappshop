import { useCallback, useMemo, useState, type JSX, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid'
import { menu } from '~/fixtures/products'
import { NavLink } from 'react-router'

interface Props {
  isVisible: (state: boolean) => void
}

const ShopMenuPopup = ({ isVisible }: Props): JSX.Element => {
  const mainMenu = useMemo(() => menu(), [])
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        isVisible(false) // Close the menu
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isVisible])

  const handler = useCallback(() => {
    isVisible(false)
  }, [isVisible])

  return (
    <div className={classNames(styles.layout, { isVisible: isVisible })} ref={menuRef}>
      <nav className={classNames('flex flex-col grow gap-1')}>
        {mainMenu.map((item, id) => (
          <div key={id}>
            {item.child ? (
              <Group onItemClick={handler} parent={item} />
            ) : (
              <Item onClick={handler} item={item} />
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

const ShopMenu = ():  JSX.Element => {
  const mainMenu = useMemo(() => menu(), [])
  
  return <nav className={classNames('flex flex-col grow gap-1')}>
    {mainMenu.map((item, id) => (
      <div key={id}>
        {item.child ? (
          <Group parent={item} />
        ) : (
          <Item item={item} />
        )}
      </div>
    ))}
  </nav>
}

interface PropsGroup {
  parent: Shop.Menu
  opened?: boolean
  onItemClick?: () => void
}

const Group = (props: PropsGroup): JSX.Element => {
  const [isActive, setIsVisible] = useState<boolean>(props.opened || false)
  const handler = useCallback(() => {
    setIsVisible(!isActive)
  }, [isActive])

  return (
    <div className="flex flex-col group">
      <button
        className={classNames(styles.default, 'hover:bg-gray-200 hover:dark:bg-gray-800')}
        onClick={handler}
      >
        <span>{props.parent.label}</span>
        {isActive ? (
          <ChevronUpIcon width={20} height={20} />
        ) : (
          <ChevronDownIcon width={20} height={20} />
        )}
      </button>
      {isActive ? (
        <div className={styles.child}>
          {props.parent.child?.map((item, id) => (
            <div key={id}>
              {item.child ? (
                <Group parent={item} />
              ) : (
                <Item onClick={props.onItemClick} item={item} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

interface PropsItem {
  item: Shop.Menu
  onClick?: () => void
}

const Item = (props: PropsItem): JSX.Element => {
  return (
    <NavLink
      className={({ isActive }) => [isActive ? styles.active : styles.default].join(' ')}
      to={props.item.href}
      onClick={props.onClick}
    >
      {props.item.label}
    </NavLink>
  )
}

export {ShopMenuPopup, ShopMenu}
