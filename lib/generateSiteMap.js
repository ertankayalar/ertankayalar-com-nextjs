const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[id].js',
    '!pages/api',
  ])

  const posts = await globby(['posts/*.md'])

  console.log(pages)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map((page) => {
              const path = page
                .replace('pages', '')
                .replace('.js', '')
                .replace('.md', '')
                .replace('.mdx', '')
                .replace('/index', '/')

              const route = path === '/index' ? '' : path
              console.log('route', route, 'path', path)
              return `
                      <url>
                          <loc>${`https://ertankayalar.com.tr${route}`}</loc>
                      </url>
                  `
            })
            .join('')}

            ${posts
              .map((post) => {
                const path = post.replace('.md', '').replace('posts', '')
                const route = path === '/index' ? '' : path

                return `
                          <url>
                              <loc>${`https://ertankayalar.com.tr/blog${route}`}</loc>
                          </url>
                      `
              })
              .join('')}

      </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()
