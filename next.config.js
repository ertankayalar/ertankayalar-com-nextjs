const withMDX = require('@next/mdx')()

module.exports = withMDX({
  env: {
    locale: 'tr-TR',
    siteName: 'ertankayalar.com.tr',
    url: 'https://ertankayalar.com/',
    default_description: 'Ertan Kayalar',
  },
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
})
