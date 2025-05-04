import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import type { Route } from './+types/root'
import '~/app.css'
import { ShopMenuPopup, ShopMenu } from '~/components/shop/menu/menu'
import { useCallback, useState, useContext, type ReactNode, useEffect } from 'react'
import CartIco from '~/components/cart/ui'
import useBodyScrollLock from '~/hooks/bodylock'
import ThemeContext from '~/contexts/theme'
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/16/solid'

export function Layout({ children }: { children: ReactNode }) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

  useBodyScrollLock(isMenuVisible)
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if ((window as any).Telegram.WebApp) {
      const tg = (window as any).Telegram.WebApp
      tg.ready()

      if (tg.themeParams.is_dark) {
        setTheme('dark')
      }
    }
  }, [setTheme])

  const themeToggle = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light')
    }
    if (theme === 'light') {
      setTheme('dark')
    }
  }, [setTheme, theme])

  const onMenuButton = useCallback(() => {
    setIsMenuVisible(!isMenuVisible)
  }, [isMenuVisible])

  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Title</title>
        <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
      </head>
      <body>
        <div className="root flex flex-col min-h-full">
          <header className="sticky top-0 bg-primary sm:py-4 py-3 z-10 flex justify-center">
            <div className="wrap flex flex-row justify-between items-center max-w-7xl">
              <div className="flex flex-row items-center gap-1">
                <button className="cursor-pointer h-[34px] px-3 md:hidden" onClick={onMenuButton}>
                  {isMenuVisible ? (
                    <XMarkIcon width={18} height={18} />
                  ) : (
                    <Bars3Icon width={18} height={18} />
                  )}
                </button>
                <NavLink className={'font-bold uppercase'} to={'/'}>
                  Shop
                </NavLink>
              </div>
              <div className="icons flex flex-row items-center gap-2">
                <button className="cursor-pointer h-[34px] px-1" onClick={themeToggle}>
                  {theme === 'dark' ? (
                    <SunIcon width={18} height={18} />
                  ) : (
                    <MoonIcon width={18} height={18} />
                  )}
                </button>
                <NavLink
                  to={'/cart'}
                  className={({ isActive }) =>
                    isActive
                      ? 'flex flex-row gap-1 items-center h-[34px] px-2 text-accent border border-transparent rounded-md'
                      : 'flex flex-row gap-1 items-center h-[34px] px-2 border border-transparent'
                  }
                >
                  <CartIco />
                </NavLink>
              </div>
            </div>
          </header>
          <main className="@container wrap mx-auto max-w-7xl flex grow justify-center py-0 gap-6">
            <aside className="hidden md:flex max-w-50 w-full flex-col">
              <ShopMenu />
            </aside>
            {children}
          </main>
          {isMenuVisible ? (
            <ShopMenuPopup
              isVisible={(state: boolean) => {
                setIsMenuVisible(state)
              }}
            />
          ) : (
            ''
          )}
          <footer className="w-full bg-background-200 py-4 sm:px-6 px-4"></footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}

export function HydrateFallback() {
  return (
    <div className="wrap">
      <div className="loader-wrap">
        <div className="loader" />
      </div>
    </div>
  )
}
