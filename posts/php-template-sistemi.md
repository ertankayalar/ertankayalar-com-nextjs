---
title: 'PHP Template sistemi'
date: '2018-11-09'
---

Web sayfaları birbirinden farklı sayfa düzenleri (layout) içerisinde oluşturulurlar. **PHP template** sistemi ile bu düzenler şablon yapısı ile kullanılır.

## Neden PHP Template (şablon) ihtiyacı var ?

Web sayfalarında üstte, allta ve yandaki bölümler çoğu sayfada benzerlikler gösterir.

![php template sistemi örneği](/assets/blog/php-template-sistemi-ornek.png)

Örneğin başlık kısmında menü, site adı gibi bilgiler diğer tüm sayfalarda değişmez. Alt kısımda ise site sahibinin adresi, telefon ve email bilgisi vb bir bölüm de aynı şekildedir. Eğer template (şablon) kullanmazsanız bu bilgileri her seferinde diğer sayfalara da kopyalamanız gerekir.

Bir seferlik iş için bu belki size sorun gibi görünmeyecektir. Ancak onlarca sayfadan oluşan bir sitenin menüsüne yapacağınız bir değişiklik için tüm sayfaları elden geçirmeniz gerektiğinde çok uğraşacaksınız demektir.

## PHP ve Template Sistemi

Başlangıçta PHP (Personal Home Page), kişisel web sayfası oluşturmak için tasarlandı. Bugün dünyada en çok kullanılan web tabanlı yazılım aracı olsa da bu özelliğini halen koruyor.

PHP konusunda çok uzman olmanıza gerek kalmadan temel HTML ve CSS bilgilerinizle web sitenizde template (şablon) sistemi kurabilirsiniz. Bunun için basit birkaç PHP komutu yeterli olacak.

Temel bir web sayfasının bölümlerine bir bakalım.

## PHP Template sisteminin mantığı nedir ?

PHP template oluşturmada temel mantık **tekrar eden bölümleri ayırmak ve bunları her yeni sayfada otomatik olarak eklenmesini sağlamaktır.**

Aşağıda basit bir html sayfa örneğimiz var.

```html
<html>
<head>
    <title>örnek web sitesi başlığı</h1>
</head>
<body>
    <div id="header">
        hoşgeldiniz !
        <a href="#">menü seçeneği</a>
    </div>
    <h1>Sayfa başlığı</h1>
    <p>
        sayfa içeriği
    </p>
    <div id="footer">
        <p>
            site adresi ve telefonu
        </p>
    </div>
</body>

</html>
```

Yukarıdaki basit örnekte olduğu gibi oluşturacağınız bir sitenin her sayfasında sayfa başlığı ve sayfa içeriğinin değişeceğini varsayalım. Bunun dışındaki diğer bölümlerin de tekrar edilmesi gerecektir.

Bu durumda sayfanızı PHP’nin birkaç komutuyla php template sistemine dönüştürebiliriz.

**header.php** ile başlık bölümü:

```html
<html>
    <head>
        <title>örnek web sitesi başlığı</h1>
    </head>
<body>
    <div id="header">
        hoşgeldiniz !
        <a href="#">menü seçeneği</a>
    </div>
```

**footer.php** ile alt bölüm:

```html
 <div id="footer">
        <p>
        site adresi ve telefonu
        </p>
    </div>
</body>
</html>
```

Aşağıdaki php ana sayfamız ilk örnekte verdiğimiz kod ile aynı çıktıyı üretecektir.

**index.php**

```php
<?php require('header.php'); ?>

<h1>Sayfa başlığı</h1>

    <p>
    sayfa içeriği
    </p>

<?php require('footer.php'); ?>
```

Artık 2. sayfamız için bu yapıyı kullanmaya devam edebiliriz.

**altsayfa.php**

```php
<?php require('header.php'); ?>

<h1>Alt Sayfa başlığı</h1>

<p>
    alt sayfa içeriği
</p>

<?php require('footer.php'); ?>
```

Gördüğünüz gibi PHP'ye ait tek bir _require_ komutu ile basit bir php template sistemi oluşturduk.

Burada her sayfanın etiketleri içerisinde de sayfa başlıklarının değiştiğini düşünecek olursak ufak bir kod daha ilave etmemiz gerekir.

**header.php**

```php
<html>
    <head>
        <title><?php if (isset($title)) echo $title.' | '; ?>web sitesi adı</h1>
    </head>
<body>
    <div id=”header”>
    hoşgeldiniz !
    <a href="#">menü seçeneği</a>
    </div>
```

Header üzerinde \$title isminde bir değişken tanımlanmış ise bunu yazdırmasını istedik. Şimdi bu değişkene header dosyasını çağıracağımız ana dosyada bir tanım yapalım.

**altsayfa.php**

```php
<?php $title = “Alt sayfa başlığı” ?>

<?php require('header.php'); ?>

<h1>Alt Sayfa başlığı</h1>

<p>
alt sayfa içeriği
</p>

<?php require('footer.php'); ?>
```

altsayfa.php’de tanımladığımız \$title değişkeninin ardından çağırdığımız header içerisinde html etikeninde gösterilmiş olacaktır. Bu örnekte basit bir tanımlama yaptık. Siz farklı ihtiyaçlarınız için değişken sayısını arttırabilirsiniz. PHP template yapısınızı belirli koşullara göre sidebar vb bölümler ekleyerek geliştirebilirsiniz.

## PHP template kütüphaneleri

PHP template sistemi gelişmiş olarak pek çok yazılımda kullanılmaktadır. PHP template kütüphaneleri okunması zor olan PHP kodunu sadeleştiren, aynı zamanda performansı arttıran PHP eklentileridir.

Başlıca PHP Template sistemlerine örnek:

- Symfony Framework için [Twig](https://twig.symfony.com)
- Laravel [Blade](https://laravel.com/docs/8.x/blade)
- [WordPress template sistemi](https://wordpress.org/extend/themes)

Twig ve Blade şablon motorları framework dışında da tek başına kullanılabilmektedir.

## PHP Template Sistemlerinin Geleceği

PHP Template sistemleri, javascript kütüphaneleri, frameworkler ve CSS frameworkler ile birlikte daha verimli çalışmak üzere gelişmeye devam ediyor. Mobil uygulama gibi çalışan hibrit uygulamalar popülerliğini arttırıyor. Flexbox gibi yeni CSS grid teknikleri arayüz tasarımını daha esnek hale getirirken, React gibi javascript kütüphaneleri kullanıcıya daha iyi deneyimler sunmak için geliştiriliyor. Webpack ile bütün tasarım parçaları daha kolay paketleniyor. Web tabanlı yazılımların sürekli olarak otomasyon ve verimlilik yönünde hızla ilerleyeceğini söyleyebiliriz.

Yeni başlayanlar için yukarıda bahsettiğim basit bir şablon işinizi görecektir. Ancak ileri düzeyde uygulama geliştirirken topluluklar tarafından geliştirilen **Twig** veya **Blade** gibi template sistemleri kullanmanızı tavsiye ederim.

Eğer bu yazıyı beğendiyseniz paylaşmayı unutmayın.
