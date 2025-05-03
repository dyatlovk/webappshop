import { deliveryLocations } from '~/fixtures/locations'
import { useCallback, useState, type JSX } from 'react'
import classNames from 'classnames'

const NewPost = (): JSX.Element => {
  const [selected, setSelected] = useState(0)
  const handler = useCallback((id: number) => {
    setSelected(id)
  }, [])

  return (
    <div className="flex flex-col gap-2 pt-3">
      <input className="input" type="text" placeholder="City" />
      <ul className="flex flex-col gap-1 cursor-pointer overflow-y-auto h-[200px]">
        {deliveryLocations.map((city: Shop.DeliveryLocation) => (
          <li
            key={city.id}
            className={classNames('p-2 rounded-md select-none',
              selected === city.id ? 'bg-secondary/10' : '',
            )}
            onClick={() => {
              handler(city.id)
            }}
          >
            <div className={classNames('font-medium')}>{city.city}</div>
            <div className={classNames('text-sm')}>
              {city.address} #{city.wareHouseId}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewPost
