declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void
        colorScheme: string
      }
    }
  }
}

namespace App {
  declare interface CartContext {
    total: Number
    setTotal: (val: Number) => void
  }

  declare interface ThemeContext {
    theme: string
    setTheme: (theme: string) => void
  }

  declare enum Theme {
    light = 'light',
    dark = 'dark',
  }

  declare interface Settings {
    currency: string
    basePath: string
  }
}

namespace Shop {
  declare interface Product {
    id: number
    name: string
    description: string
    imageSrc: string
    imageAlt?: string
    price: string
    oldPrice?: string
    images?: string[]
  }

  declare interface Menu {
    href: string
    label: string
    child?: Menu[]
  }

  declare interface DeliveryLocation {
    id: number
    city: string
    address: string
    wareHouseId: number
  }
}
