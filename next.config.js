const { getRedirectStatus } = require('next/dist/lib/load-custom-routes')

const withMDX = require('@next/mdx')()

module.exports = withMDX({
  async redirects() {
    return [
      {
        source: '/yazilim-uzmani-olmak',
        destination: 'https://ertankayalar.com.tr/yazilim-uzmani-olmak',
        permanent: true,
      },
      {
        source: '/iletisim',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama',
        destination: 'https://pazarlama.info.tr',
        permanent: true,
      },
      {
        source: '/sozluk',
        destination: 'https://pazarlama.info.tr/sozluk',
        permanent: true,
      },
      {
        source: '/sozluk-bolumu/dijital-pazarlama-sozlugu',
        destination: 'https://pazarlama.info.tr/sozluk',
        permanent: true,
      },
    ]
  },
  env: {
    locale: 'en',
    siteName: 'ertankayalar.com',
    url: 'https://ertankayalar.com/',
    default_description: 'Ertan Kayalar',
  },
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
})
