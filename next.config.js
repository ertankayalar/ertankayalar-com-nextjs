const withMDX = require('@next/mdx')()
module.exports = withMDX({
    pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
  })

