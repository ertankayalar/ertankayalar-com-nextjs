const withMDX = require('@next/mdx')()

module.exports = withMDX({
  env: {
    locale: 'en',
    siteName: 'ertankayalar.com',
    url: 'https://ertankayalar.com/',
    default_description: 'Ertan Kayalar',
  },
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
})
