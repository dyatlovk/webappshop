import type { Route } from './+types/checkout'
import { Link } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Checkout Page' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return (
    <div className="wrap flex flex-col gap-10 items-center justify-center w-full">
      <div className="w-full text-center uppercase">
        <h1>Congratulations</h1>
      </div>
      <div className="">
        <Link to={'/'} className="btn-primary">Continue shopping</Link>
      </div>
    </div>
  )
}
