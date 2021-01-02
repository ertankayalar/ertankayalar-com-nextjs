const { getRedirectStatus } = require('next/dist/lib/load-custom-routes')

const withMDX = require('@next/mdx')()

const ertankayalarcomtr = 'https://ertankayalar.com.tr'
const pazarlamainfotr = 'https://pazarlama.info.tr'

module.exports = withMDX({
  async redirects() {
    return [
      {
        source: '/yazilim-uzmani-olmak',
        destination: ertankayalarcomtr + '/yazilim-uzmani-olmak',
        permanent: true,
      },
      {
        source: '/yazilim-mimarisi-tasarlama',
        destination: ertankayalarcomtr + '/yazilim-mimarisi-tasarlama',
        permanent: true,
      },

      {
        source: '/php-template-sistemi',
        destination: ertankayalarcomtr + '/php-template-sistemi',
        permanent: true,
      },
      {
        source: '/yazilim-teknolojileri',
        destination: ertankayalarcomtr + '/yazilim-teknolojileri',
        permanent: true,
      },
      {
        source: '/birakin-web-siteniz-size-para-kazandirsin',
        destination: ertankayalarcomtr,
        permanent: true,
      },
      {
        source: '/reklamin-kotusu-olur-basit-web-sitesi-kaybettirir',
        destination: ertankayalarcomtr,
        permanent: true,
      },
      {
        source: '/bu-hatalari-web-sitenizde-yapmayin',
        destination: ertankayalarcomtr,
        permanent: true,
      },
      {
        source: '/en/10-online-marketing-benefits',
        destination: '/',
        permanent: true,
      },
      {
        source: '/b2b-dijital-pazarlama-sunumu',
        destination: ertankayalarcomtr,
        permanent: true,
      },
      {
        source: '/ozel-yazilim-cozumleri',
        destination: ertankayalarcomtr + '/ozel-yazilim-cozumleri',
        permanent: true,
      },
      {
        source: '/daha-cok-satis-yapmak',
        destination: ertankayalarcomtr + '/daha-cok-satis-yapmak',
        permanent: true,
      },
      {
        source: '/internette-strateji',
        destination: ertankayalarcomtr + '/internette-strateji',
        permanent: true,
      },
      {
        source: '/symfony-php-framework-1',
        destination: ertankayalarcomtr + '/symfony-framework',
        permanent: true,
      },
      {
        source: '/e-pazarlama-icin-10-neden',
        destination: pazarlamainfotr,
        permanent: true,
      },
      {
        source: '/neden-dijital-pazarlama-yapmali',
        destination: pazarlamainfotr + '/neden-dijital-pazarlama',
        permanent: true,
      },
      {
        source: '/ozel-yazilim-sirketleri',
        destination: ertankayalarcomtr + '/ozel-yazilim-sirketleri',
        permanent: true,
      },
      {
        source: '/b2b-nedir',
        destination: ertankayalarcomtr + '/b2b-nedir',
        permanent: true,
      },
      {
        source: '/neden-linux',
        destination: '/neden-linux',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama-uzmani',
        destination: pazarlamainfotr + '/blog/dijital-pazarlama-uzmani',
        permanent: true,
      },
      {
        source: '/ozel-yazilim-yaptirmak',
        destination: ertankayalarcomtr + '/ozel-yazilim-yaptirmak',
        permanent: true,
      },
      {
        source: '/yazilim-uzmani-olmak',
        destination: ertankayalarcomtr + '/yazilim-uzmani-olmak',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama-nedir',
        destination: pazarlamainfotr + '/dijital-pazarlama-nedir',
        permanent: true,
      },
      {
        source: '/abone-ol',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/musteri-odakli-dusunun  ',
        destination: pazarlamainfotr + '/musteri-odakli-dusunun',
        permanent: true,
      },
      {
        source: '/en/myblog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sss',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/mobil-pazarlama',
        destination: pazarlamainfotr + '/mobil-pazarlama',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/dijital-pazarlama-stratejisi',
        destination: pazarlamainfotr + '/dijital-pazarlama-stratejisi',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/dijital-pazarlama-sistemi',
        destination: pazarlamainfotr + '/dijital-pazarlama-sistemi',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/trafik-yaratin',
        destination: pazarlamainfotr + '/trafik-yaratin',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/marka-hikayesi-yaratmak',
        destination: pazarlamainfotr + '/marka-hikayesi-yaratmak',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/donusum-optimizasyonu',
        destination: pazarlamainfotr + '/donusum-optimizasyonu',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/seo',
        destination: pazarlamainfotr + '/arama-motoru-optimizasyonu',
        permanent: true,
      },
      {
        source: '/sosyal-medya-pazarlama',
        destination: pazarlamainfotr + '/sosyal-medya-pazarlama',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/arama-motoru-pazarlamasi',
        destination: pazarlamainfotr + '/arama-motoru-pazarlamasi',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/dijital-pazarlama-nedir',
        destination: pazarlamainfotr + '/dijital-pazarlama-nedir',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama/icerik-pazarlamasi',
        destination: pazarlamainfotr + '/icerik-pazarlamasi-yapin',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama',
        destination: pazarlamainfotr,
        permanent: true,
      },
      {
        source: '/hakkimda',
        destination: ertankayalarcomtr + '/hakkimda',
        permanent: true,
      },
      {
        source: '/en/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/iletisim',
        destination: ertankayalarcomtr + '/iletisim',
        permanent: true,
      },
      {
        source: '/en/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/sozluk',
        destination: pazarlamainfotr + '/sozluk',
        permanent: true,
      },
      {
        source: '/sozluk/xml-site-haritasi',
        destination: pazarlamainfotr + '/sozluk/xml-site-map',
        permanent: true,
      },
      {
        source: '/sozluk/yatirimin-getirisi',
        destination: pazarlamainfotr + '/sozluk/roi',
        permanent: true,
      },
      {
        source: '/sozluk/yazi-takvimi',
        destination: pazarlamainfotr + '/sozluk/editorial-calendar',
        permanent: true,
      },
      {
        source: '/sozluk/uzun-kuyruk-anahtar-kelime',
        destination: pazarlamainfotr + '/sozluk/long-tail-keyword',
        permanent: true,
      },
      {
        source: '/sozluk/varis-sayfasi',
        destination: pazarlamainfotr + '/sozluk/landing-page',
        permanent: true,
      },
      {
        source: '/sozluk/viral-icerik',
        destination: pazarlamainfotr + '/sozluk/viral-content',
        permanent: true,
      },
      {
        source: '/sozluk/web-developer',
        destination: ertankayalarcomtr,
        permanent: true,
      },
      {
        source: '/sozluk/kpi',
        destination: pazarlamainfotr + '/sozluk/kpi',
        permanent: true,
      },
      {
        source: '/sozluk/tiklama-basina-odeme',
        destination: pazarlamainfotr + '/sozluk/ppc',
        permanent: true,
      },
      {
        source: '/sozluk/tiklama-orani',
        destination: pazarlamainfotr + '/sozluk/ctr',
        permanent: true,
      },
      {
        source: '/sozluk/tofu',
        destination: pazarlamainfotr + '/sozluk/tofu',
        permanent: true,
      },
      {
        source: '/sozluk/url',
        destination: pazarlamainfotr + '/sozluk/url',
        permanent: true,
      },
      {
        source: '/sozluk/urun-pazar-uyumu',
        destination: pazarlamainfotr + '/sozluk/product-market-fit',
        permanent: true,
      },
      {
        source: '/sozluk/saas',
        destination: ertankayalarcomtr + '/sass-nedir',
        permanent: true,
      },
      {
        source: '/sozluk/satis-hunisi',
        destination: pazarlamainfotr + '/sozluk/sales-funnel',
        permanent: true,
      },
      {
        source: '/sozluk/sayfa-goruntuleme',
        destination: pazarlamainfotr + '/sozluk/pageview',
        permanent: true,
      },
      {
        source: '/sozluk/sosyal-medya',
        destination: pazarlamainfotr + '/sozluk/social-media',
        permanent: true,
      },
      {
        source: '/sozluk/talep',
        destination: pazarlamainfotr + '/sozluk/lead',
        permanent: true,
      },
      {
        source: '/sozluk/talep-yaratma',
        destination: pazarlamainfotr + '/sozluk/lead-generation',
        permanent: true,
      },
      {
        source: '/sozluk/mobil-pazarlama',
        destination: pazarlamainfotr + '/sozluk/mobile-marketing',
        permanent: true,
      },
      {
        source: '/sozluk/mofu',
        destination: pazarlamainfotr + '/sozluk/mofu',
        permanent: true,
      },
      {
        source: '/sozluk/musteri-yolculugu',
        destination: pazarlamainfotr + '/sozluk/buyers-journey',
        permanent: true,
      },
      {
        source: '/sozluk/nofollow',
        destination: pazarlamainfotr + '/sozluk/nofollow',
        permanent: true,
      },
      {
        source: '/sozluk/off-page-seo',
        destination: pazarlamainfotr + '/sozluk/off-page-seo',
        permanent: true,
      },
      {
        source: '/sozluk/on-page-seo',
        destination: pazarlamainfotr + '/sozluk/on-page-seo',
        permanent: true,
      },
      {
        source: '/sozluk/ozel-yazilim',
        destination: ertankayalarcomtr + '/ozel-yazilim-nedir',
        permanent: true,
      },
      {
        source: '/sozluk/pazarlama-otomasyonu',
        destination: pazarlamainfotr + '/sozluk/marketing-automation',
        permanent: true,
      },
      {
        source: '/sozluk/hemen-cikma-orani',
        destination: pazarlamainfotr + '/sozluk/bounce-rate',
        permanent: true,
      },
      {
        source: '/sozluk/html',
        destination: ertankayalarcomtr + '/yazilim-terimleri',
        permanent: true,
      },
      {
        source: '/sozluk/icerik',
        destination: pazarlamainfotr + '/sozluk/content',
        permanent: true,
      },
      {
        source: '/sozluk/cms',
        destination: pazarlamainfotr + '/sozluk/cms',
        permanent: true,
      },
      {
        source: '/sozluk/inbound-marketing',
        destination: pazarlamainfotr + '/sozluk/inbound-marketing',
        permanent: true,
      },
      {
        source: '/sozluk/javascript',
        destination: ertankayalarcomtr + '/yazilim-terimleri',
        permanent: true,
      },
      {
        source: '/sozluk/kisilik-karti',
        destination: pazarlamainfotr + '/sozluk/buyer-persona',
        permanent: true,
      },
      {
        source: '/sozluk/kullanici-arabirimi',
        destination: ertankayalarcomtr + '/ux-ui-nedir',
        permanent: true,
      },
      {
        source: '/sozluk/kullanici-deneyimi-ux',
        destination: ertankayalarcomtr + '/ux-ui-nedir',
        permanent: true,
      },
      {
        source: '/sozluk/mobil-optimizasyon',
        destination: pazarlamainfotr + '/sozluk/mobile-optimization',
        permanent: true,
      },
      {
        source: '/sozluk/form',
        destination: pazarlamainfotr + '/sozluk/form',
        permanent: true,
      },
      {
        source: '/sozluk/hashtag',
        destination: pazarlamainfotr + '/sozluk/hashtag',
        permanent: true,
      },
      {
        source: '/sozluk/donusum-orani',
        destination: pazarlamainfotr + '/sozluk/conversion-rate',
        permanent: true,
      },
      {
        source: '/sozluk/donusum-orani-optimizasyonu',
        destination: pazarlamainfotr + '/sozluk/cro',
        permanent: true,
      },
      {
        source: '/sozluk/duyarli-tasarim',
        destination: ertankayalarcomtr + '/yazilim-terimleri',
        permanent: true,
      },
      {
        source: '/sozluk/e-kitap',
        destination: pazarlamainfotr + '/sozluk/e-book',
        permanent: true,
      },
      {
        source: '/sozluk/eskimeyen-icerik',
        destination: pazarlamainfotr + '/sozluk/evergreen-content',
        permanent: true,
      },
      {
        source: '/sozluk/eylem-cagrisi',
        destination: pazarlamainfotr + '/sozluk/cta',
        permanent: true,
      },
      {
        source: '/sozluk/a-b-testi',
        destination: pazarlamainfotr + '/sozluk/a-b-testi',
        permanent: true,
      },
      {
        source: '/sozluk/anahtar-kelime',
        destination: pazarlamainfotr + '/sozluk/keyword',
        permanent: true,
      },
      {
        source: '/sozluk/analitik',
        destination: pazarlamainfotr + '/sozluk/analytic',
        permanent: true,
      },
      {
        source: '/sozluk/seo',
        destination: pazarlamainfotr + '/sozluk/seo',
        permanent: true,
      },
      {
        source: '/sozluk/benzersiz-ziyaretci',
        destination: pazarlamainfotr + '/sozluk/unique-visitor',
        permanent: true,
      },
      {
        source: '/sozluk/bloglama',
        destination: pazarlamainfotr + '/sozluk/blogging',
        permanent: true,
      },
      {
        source: '/sozluk/bofu',
        destination: pazarlamainfotr + '/sozluk/bofu',
        permanent: true,
      },
      {
        source: '/sozluk/crm',
        destination: pazarlamainfotr + '/sozluk/crm',
        permanent: true,
      },
      {
        source: '/sozluk/css',
        destination: ertankayalarcomtr + '/yazilim-terimleri',
        permanent: true,
      },
      {
        source: '/sozluk/yazilim-uzmani',
        destination: ertankayalarcomtr + '/yazilim-terimleri',
        permanent: true,
      },
      {
        source: '/sozluk/dijital-pazarlama-uzmani',
        destination: pazarlamainfotr + '/sozluk/digital-marketing-expert',
        permanent: true,
      },
      {
        source: '/en/sozluk',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sozluk-bolumu/dijital-pazarlama-sozlugu',
        destination: pazarlamainfotr + '/sozluk',
        permanent: true,
      },
      {
        source: '/sozluk-bolumu/yazilim-gelistirme-sozlugu',
        destination: ertankayalarcomtr + '/yazilim-terimleri',
        permanent: true,
      },
      {
        source: '/sozluk-etiketi/donusum-tr',
        destination: pazarlamainfotr,
        permanent: true,
      },
      {
        source: '/author/ertan',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/category/girisimcilik',
        destination: ertankayalarcomtr,
        permanent: true,
      },
      {
        source: '/category/kodlama',
        destination: ertankayalarcomtr,
        permanent: true,
      },
      {
        source: '/category/pazarlama',
        destination: pazarlamainfotr,
        permanent: true,
      },
      {
        source: '/en/category/startup',
        destination: '/',
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
