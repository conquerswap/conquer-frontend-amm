import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://conquerswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://conquerswap.finance/farms'
  },
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: 'https://conquerswap.finance/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x32556dC6eE696e0a03c6F7993dA17a7245D93007',
      },
      /**
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/conquer-swap/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/conquer-swap',
      },
      */
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/conquerswap/",
      },
      /**
      {
        label: "Docs",
        href: "https://conquerswap.gitbook.io/conquer-swap/",
      },
      {
        label: "Blog",
        href: "https://conquer-swap.medium.com/",
      },
      */
    ],
  },
  /**
  {
    label: 'Audit by Hacken',
    icon: 'HelmetIcon',
    href: 'https://conquerswap.finance/files/conquerHackenAudit.pdf',
  },
  */
]

export default config
