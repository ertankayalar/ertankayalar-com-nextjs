---
title: 'Yazılım Teknolojileri Seçimini Nasıl Yapmalı ?'
date: '2018-05-28'
---

Özel yazılım yaptırırken dikkat etmeniz gereken konulardan bir tanesi de kullanılacak teknolojilerdir. Seçeceğiniz teknoloji projenizin ihtiyaçlarına uygun olmalıdır. Hatalı seçimler size kötü performans, yüksek lisans maliyetleri gibi faturalar çıkarabilir. Yazılım teknolojilerini seçerken dikkat etmeniz gereken kuralları öğrenerek risklerinizi azaltabilirsiniz.

- [Özel yazılım teknolojisi seçerken neden dikkatli olmalıyız ?](#neden)
- [Açık kaynak teknolojileri tercih edin](#acik-kaynak)
- [Yazılım her platformda çalışabilmelidir](#platform)
- [Framework'leri tercih edin](#framework)
- [Mümkünse hazır yazılımları özelleştirin](#ozellestirme)

## Özel yazılım teknolojilerini belirlerken neden dikkatli olmak zorundayız ? {#neden}

Eğer yazılım teknolojileri seçiminde hata yaparsak neler olur ?

- Projemizden verim alamayabiliriz
- Yazılım geliştiriciler büyük zorluklarla karşılaşabilirler
- Projenin süresi ve maliyeti artabilir
- Yüksek lisans maliyetleri ortaya çıkabilir
- Güvenlik soruları oluşabilir

Yazılım teknolojilerini doğru seçersek:

- Maliyetleri kontrol etme şansımız olur
- Projenin süresini kısaltabiliriz
- Başkalarına olan bağımlılığımız azalır
- Projemizin bakımı kolaylaşır
- Uzun dönemli çalışacak bir uygulamaya sahip oluruz

## Açık kaynak teknolojileri tercih edilmeli {#acik-kaynak}

Açık kaynak (Open source) uygulamalar, adı üstünde yazılım kodunun açık olması nedeniyle ihtiyaç duyulduğunda kolayca yeniden düzenlenebilirler.

Bugün yazılım dünyasında, [WordPress, Joomla, Drupal](https://webtasarimsitesi.com/wordpress-joomla-drupal) gibi pek çok uygulama açık kaynak uygulamalardır. Telefon ve tabletlerde bulunan Android yazılımı, aslında Linux sisteminin çok az bir kısmı değiştirilerek ortaya çıkan başarılı bir örnektir.

Açık kaynak teknlojilerinin çoğunda lisans için ücret ödemezsiniz. Örneğin Facebook dünya genelindeki onbinlerce sunucusunda [linux](/neden-linux) kullanmaktadır. Eğer Microsoft Windows kullansaydı korkunç bir lisans maliyeti ödeyecekti.

## Yazılım her platformda çalışabilmelidir {#platform}

Geliştirilecek olan yazılım platform bağımsız olmalıdır.

Platform olarak neyi kastediyorum ?

Windows, Linux veya OsX işletim sistemleri, cep telefonu veya tabletler.

Eğer Mobil cihazlarla uyumlu web tabanlı yazılım geliştirirseniz yukarıdaki tüm sistemlerde tarayıcı üzerinden uygulamanızı kullanabilirsiniz.

Burada dikkat edilmesi gereken bir detay da kodlama teknolojisidir. Örneğin sadece Windows sunucularda çalışan Asp.net yerine, her sunucuda çalışan
[PHP](https://php.net)/[MySQL](https://mysql.com) veya [Python](https://python.org)/[PostgreSQL](https://postgresql.org) vb platforlarını seçmenizi tavsiye ederim. Bu sayede web server seçerken de bütçenize ve ihtiyaçlarınıza göre seçeneklerinizi arttırmış olursunuz.

## Frameworkleri Tercih Edin {#framework}

Tekerleği yeniden icat etmeyin.

Frameworkler, genel problemlerin çözülmesi için veya belirli bir alanda ihtiyaç duyulan fonksiyonları yerine getiren yazılım kütüphaneleridir.

Frameworkler, yazılım geliştiricilerin kodlama süresini kısaltırlar.

Yazılım mimarisi, güvenlik, veritabanı, kullanıcı yönetimi vs. Bu alanların sorunsuz çalışması yazılım uzmanının proje hedeflerine daha iyi odaklanmasını sağlar.

Tavsiye edebileceğim bazı popüler frameworkler:

- [Symfony PHP Framework](https://symfony.com) Endüstri standardı olmuş profesyonel ve aktif bir framework.
- [Laravel](https://laravel.com) Popüler PHP framework.
- [Yii PHP Framework](https://yiiframework.com)
- [WordPress](https://wordpress.org) Popüler blog ve CMS uygulaması. Eğer projeniz içerik temelli ise WordPress içine eklenti veya tema geliştirerek çözüm üretmek mümkündür.
- [Django](https://www.djangoproject.com/) Python Web Framework
- [Next.JS](https://nextjs.org/) Javascript React Framework

Başka frameworkler yok mu ? Elbette var. Örneğin Ruby on Rails. Burada ülkemizde rahatlıkla yazılım geliştirici kullanabileceğiniz PHP tabanlı olanları seçtim.

<h2 id='ozellestirme'>Mümkünse hazır yazılımları özelleştirin</h2>

Özel yazılımda framewokler gibi hazır uygulamaların da eğer mümkünse kullanılması elzemdir.

Eğer bir eticaret sitesi kuruyorsanız, sıfırdan eticaret uygulaması yazmak yerine, Magento, Prestashop veya WooCommerce gibi hazır eticaret çözümlerini özelleştirebilirsiniz.

WooCommerce, WordPress içerisinde çalışır. WordPress dünyanın en çok kullanılan içerik yönetim yazılımı. Binlerce hazır [eklentisi](https://webtasarimsitesi.com/wordpress-eklentileri) ile sayısız değerli fonksiyonlar kazanır. İhtiyacınız olan metin temelli bir site ise WordPress ile devam edebilirsiniz.

Yukarıdaki listede WordPress’in olma bir nedeni de budur aslında. Benim tercih ettiğim yol, kodlama süresini kısaltacak, değişiklik ve düzeltmelerde programlama ihtiyaçlarını mümkünse minimumda tutmaktır.

## Sonuç

Hangi teknolijiyi seçeceğiniz ihtiyaçlarınıza, yazılım geliştirinin kabiliyetine ve bütçenize bağlıdır. Benim için projenin türüne göre <em>WordPress</em> bazen uygun bir seçim olabiliyor. Bazen de <em>Symfony</em> gibi frameworklere iş düşüyor. Online girişim, web otomasyonu veya bir eticaret sitesi kurmak istiyor olabilirsiniz. Hangi adıma atacağınıza doğru karar vermek, başağrılarını ve riskleri azaltacaktır.

[Eğer özel yazılım yaptırmak istiyorsanız](/ozel-yazilim-yaptirmak) bilmeniz gerekenlerleri bu yazımda okuyabilirsiniz.

Projeniz için hangi hangi yazılım teknolojilerini kullanmayı düşünüyorsunuz ? Kafanızda sorular varsa yorumlara yazarak bana ulaştırabilirsiniz.
