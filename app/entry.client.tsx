import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import { CartProvider } from './components/cart/context'
import { ThemeProvider } from '~/contexts/theme'

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ThemeProvider>
        <CartProvider>
          <HydratedRouter />
        </CartProvider>
      </ThemeProvider>
    </StrictMode>,
  )
})
