import { getRndInteger } from '~/fixtures/math'

export function homeProducts(): Shop.Product[] {
  return [
    {
      id: 1,
      name: 'The Kaleidoscope Geometric Tee',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: 'images/3.jpg',
      price: String(getRndInteger(10, 100)),
    },
    {
      id: 2,
      name: 'Kaleidoscope Geometric t-shirt',
      description: '<p>Make a statement with our eye-catching Kaleidoscope Geometric t-shirt!</p>',
      imageSrc: 'images/2.jpg',
      price: String(getRndInteger(10, 100)),
      oldPrice: String(getRndInteger(10, 100)),
    },
    {
      id: 3,
      name: 'Item',
      description:
        '<p>Perfect for anyone who loves bold patterns, modern art, and expressing their vibrant personality</p>',
      imageSrc: 'images/4.jpg',
      price: String(getRndInteger(10, 100)),
    },
    {
      id: 4,
      name: 'The Kaleidoscope Geometric Tee',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: 'images/3.jpg',
      price: String(getRndInteger(10, 100)),
    },
    {
      id: 5,
      name: 'The Kaleidoscope Geometric Tee',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: 'images/6.jpg',
      price: String(getRndInteger(10, 100)),
    },
    {
      id: 6,
      name: 'The Kaleidoscope Geometric Tee',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: 'images/7.jpg',
      price: String(getRndInteger(10, 100)),
    },
  ]
}

export function single(): Shop.Product {
  return {
    id: 1,
    name: 'Basic Tee',
    description:
      '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
    imageSrc: '/images/1.jpg',
    price: String(getRndInteger(10, 100)),
    images: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg'],
  }
}

export function listProducts(): Shop.Product[] {
  return [
    {
      id: 1,
      name: 'Basic Tee',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: '/images/1.jpg',
      price: String(getRndInteger(10, 100)),
      oldPrice: String(getRndInteger(10, 100)),
    },
    {
      id: 2,
      name: 'Item',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: '/images/5.jpg',
      price: String(getRndInteger(10, 100)),
      oldPrice: String(getRndInteger(10, 100)),
    },
    {
      id: 3,
      name: 'Item',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: '/images/6.jpg',
      price: String(getRndInteger(10, 100)),
    },
    {
      id: 4,
      name: 'Item',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: '/images/7.jpg',
      price: String(getRndInteger(10, 100)),
    },
  ]
}

export function cart(): Shop.Product[] {
  return [
    {
      id: 1,
      name: 'Basic Tee',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: '/images/7.jpg',
      price: String(getRndInteger(10, 100)),
      images: ['/images/7.jpg'],
    },
    {
      id: 2,
      name: 'Basic Tee',
      description:
        '<p>Made from premium, soft-touch cotton for ultimate comfort and durability. Designed with a modern, comfortable fit.</p>',
      imageSrc: '/images/3.jpg',
      price: String(getRndInteger(10, 100)),
      images: ['/images/4.jpg'],
    },
  ]
}

export function menu(): Shop.Menu[] {
  return [
    {
      href: 'shop/gadgets',
      label: 'Gadgets',
    },
    {
      href: '#',
      label: 'Computing',
      child: [
        {
          href: '/shop/laptop',
          label: 'Laptops',
        },
        {
          href: '/shop/tablets',
          label: 'Tablets',
        },
        {
          href: '/shop/monitors',
          label: 'Monitors',
        },
      ],
    },
    {
      href: '#',
      label: 'Photo',
      child: [
        {
          href: '/shop/cameras',
          label: 'Cameras',
        },
        {
          href: '/shop/lenses',
          label: 'Lenses',
        },
        {
          href: '/shop/flashes',
          label: 'Flashes',
        },
      ],
    },
    {
      href: '#',
      label: 'Audio',
      child: [
        {
          href: '/shop/headphones',
          label: 'Headphones',
        },
        {
          href: '#',
          label: 'Headsets',
          child: [
            {
              href: '/shop/speakers',
              label: 'Speakers',
            },
          ],
        },
      ],
    },
  ]
}
