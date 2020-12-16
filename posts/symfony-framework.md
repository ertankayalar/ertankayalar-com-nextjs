---
title: 'Symfony PHP Framework İncelemesi'
date: '2018-05-17'
coverImage: '/assets/blog/symfony-inceleme.jpg'
---

Symfony, uzun yıllardır aktif bir yazılım geliştirici topluluğuna sahip başarılı bir PHP framework. Liderliğini Fabien Potencier'in yaptığı Symfony ilk yıllardan itibaren programcıların ortak problemlerini çözmeyi hedefledi. Bugün artık bir endüstri standardı haline gelerek büyük projelerde tercih edilir oldu.

Symfony [benim](https://connect.sensiolabs.com/profile/erkasoft) yıllardır sevdiğim bir framework. Tam zamanlı kullanmasam da, zaman zaman başka frameworkler üzerinde çalışsam da benim için Symfony daima listenin başında geliyor.

## Neden Framework ?

Programcılar arasında sürüp giden tartışmalardan bir tanesi de framework kullanmaya gerek olup olmadığı yönündedir. Kimileri "gerekli" der, kimileri "gereksiz". Sonu olmayan bu tür tartışmalara girmeyen birisi olarak size şunu söyleyebilirim:

**İşinizi daha iyi yapmanızı sağlayacak her konuyu ciddiye alın.**

Bana göre framework, programcıya bir kalıp sunarak işini kolaylaştırıyor. Programcıların bir araya gelerek ortak akıl yürütmesi ile etkili bir yapı ortaya çıkıyor. Özellikle ekip olarak çalışıyorsanız framework kullanımı, yazılım geliştirme takımınızın izleyeceği programlama prensipleri ile projenizin sağlıklı ve sorunsuz yürümesini sağlayacaktır. Özetle frameworkler [özel yazılım geliştirmek](https://ertankayalar.com.tr/blog/ozel-yazilim-yaptirmak/) için ideal araçlardır.

## Symfony öğrenmesi çok zor bir framework mü ?

İnternette çok dolaşan hikayelerden bir tanesi de Symfony "öğrenmesi zor bir framework" olduğu yönündedir.

Bana sorarsanız, basit bir tuzaktan başka bir şey değildir.

Symfony ilk sürümünden itibaren kapsamlı bir kütüphane olduğu için bazılarının gözünü korkutmuş olmalı.

Zend framework gibi Symfony de karmaşık iş uygulamaları için tasarlanmış bir dizi parçadan (bundle) oluşmaktadır.

Nesne yönelimli programlama (OOP) yapısına önem verir. [Dependency injection](https://symfony.com/doc/current/components/dependency_injection.html) gibi yapısal sorunlarla uğraşır.

## Symfony 4

![symfony logo](/assets/blog/symfony_black_03.svg)

Symfony başarılı 2 ve 3 sürümlerinden sonra 4.0 ile karşımızda.

Yeni gelen özelliklerinden en çok sevdiğim ilk üçü şöyle:

- Yeni klasör yapısı: kod yönetimini daha kolaylaştırıyor
- Hafif bir sürüm: daha az sayıda dosyalar olarak geliyor
- Flex: istediğiniz paketleri kolayca projenize ekliyorsunuz

Symfony iyi bir [yazılım mimarisine](https://ertankayalar.com.tr/blog/yazilim-mimarisi-tasarlama/) sahip.

Tipik bir Symfony uygulamasında klasörler aşağıdaki gibi oluşuyor.

<script src='https://gist.github.com/ertankayalar/dd5d41a87b42ba379384bad68726b268.js'></script>

Detaylar için <a href="http://fabien.potencier.org/symfony4-directory-structure.html" rel="noreferrer noopener nofollow" target="_blank">Fabien'in yazısını</a> okuyabilirsiniz.

**Neden hafif sürüm ?**
Bazı geliştiriciler daha hafif sürüm olduğu için diğerlerini (Laravel, Codeigniter vb) tercih ediyorlar. Symfony’nin başlangıçtaki dosya sayısı ve büyüklüğüne itiraz ediyorlardı.

Küçük bir frameworkle başlamak ve ihtiyaca göre büyümesini sağlamak daha doğru bir tercih olmuş.

Symfony ile komut satırı bir uygulama veya basit javascript uygulaması yapmak isteyenler için daha cazip hale gelmiş diyebiliriz.

Symfony projesi başlatmak için composer ile aşağıdaki komutu yazmanız yeterli.

```bash
    $ composer create-project symfony/skeleton projeadi
    $ cd projeadi
```

**Symfony Console**
Symfony komut satırı uygulaması ile bir çok işi kolayca yapmak mümkün.

```bash
    $ php bin/console
```

Symfony Console kurduğunuz her bundle ile yeni komutlar kazanıyor ve aşağıdaki liste uzayıp gidiyor.

![symfony console](/assets/blog/symfony-console.jpg)

Symfony ile kod yazmaya başladığınızda komut satırından güçlü Symfony Console ile editörünüz arasında gidip gelirken buluyorsunuz. Symfony Console, bir çok işi sizin adınıza yaparak işinizi kolaylaştırıyor.

**Bash Aliases**

Her seferinde komut satırında uzun uzun konsole komutu yazmak yerine bash alises tanımlayabilirsiniz. Benim kullandığım <a href="https://gist.github.com/ertankayalar/70ec4ef0410b299ee2e6df9109425af0" rel="noreferrer noopener nofollow" target="_blank">Symfony Bash Alias'lar burada.</a>

Bash aliases Linux ve Osx üzerinde sık kullanılan komutları kısa takma adlar kullanarak daha etkili çalışmanızı sağlar. İleride bu konuya gireceğim.

**Symfony Web Server**
Eğer Apache gibi bir web server bilgisayarınızda kurulu değilse aşağıdaki komutla Symfony üzerinde çalışmak için bir server kurabilirsiniz.

```bash

    $ composer require server

```

Symfony server aşağıdaki komutla çalıştırılıyor

```bash
    $ php bin/console server:run


     [OK] Server listening on http://127.0.0.1:8000
    // Quit the server with CONTROL-C.                                                   PHP 7.2.4 Development Server started at Tue May  1 15:43:56 2018
    Listening on http://127.0.0.1:8000
    Document root is /home/username/Code/symfony-demo/public
    Press Ctrl-C to quit.
```

Yukarıdaki mesajdan da görülüğü gibi aşağıdaki adresten yeni uygulamanızı çalıştırabilirsiniz.

`http://127.0.0.1:8000`

## Flex ve reçeteler

Artık Symfony installer ile kuruluş önerilmiyor. Onun yerine composer ile uygulamanızın ihtiyaç duyduğu parçaları (bundle) rahatça kurmak mümkün.

[Flex](https://symfony.com/doc/current/setup/flex.html) composer üzerinde bundle'ların kurulması ve kaldırıması için çalışıyor.

Flex reçeteleri ile boş bir Symfony 4 uygulaması kurup ihtiyacınız olan tüm kütüphaneleri projenize ekleyebilirsiniz.

Flex reçetelerini [burada](https://symfony.sh/) bulabilirsiniz.

## Symfony sistem gereksinimleri

Sisteminizin Symfony için yeterli olduğundan emin olmak isteyeceksiniz. Bunun için `req-checker` bundle size yardım edecek.

```bash

$ composer require req-checker
$ php vendor/bin/requirements-checker

```

Dilerseniz adres satırından da web server tarafını kontrol edebilirsiniz.

`http://localhost:8000/check.php`

İşiniz bitince aşağıdaki komutla kaldırabilirsiniz

```bash

    $ composer remove req-checker

```

## Route ile URL Yönetimi

İş konfigürasyona geldiğinde Symfony'de farklı format seçenekleri var. Yaml, PHP veya XML formatlarını kullanabilirsiniz.

Ayrıca not (annotation) şeklinde tanımlama da yapmak mümkün. Kurmanız gereken bundle:

```bash

    $ composer require annotations

```

Bir örnekle açıklayacak olursak. Aşağıdaki örnekte iki farklı tür adres var:

```
    /blog
    /blog/makale-adresi
```

BlogController detayları:

<script src='https://gist.github.com/ertankayalar/de0e8d8d35ec64f5533eea25f12c3f83.js'></script>

Fonksiyon üzerindeki `@Route` tanımına dikkat edin.
Birinci fonksiyon `list()` "/blog" adresine ayarlık iken, ikincisi "/blog/\*" ile başlayan tüm adreslere ayarlanmış durumda.

## Doctrine ORM

Doctrine güçlü bir ORM (Object-Relational Mapping). Doctrine ile MySql, Postgresql veya MSSQL gibi farklı veritabanlarını kullanabilirsiniz. Doctrine içinde Entity tanımlayarak iş modellerini veritabanı teknolojisinden bağımsız kullanabilirsiniz. Başka bir veritabanı teknoloji ihtiyaç olduğunda yeniden kod yazmak zorunda kalmıyorsunuz. Doctrine arka planda işi hallediyor.

Doctrine kullanmak için gerekli paketler

```bash

    $ composer require doctrine
    $ composer require maker --dev
```

`.env` dosyasında veritabanı bağlantı tanımını yapmanız gerekiyor.

```
    # .env

    # customize this line!
    DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name"
```

Doctrine veritabanını yaratmak için aşağıdaki komutu yazmanız yeterli.

```bash

    $ php bin/console doctrine:database:create
```

Symfony ile bir Entity oluşturmak için console size yardımcı oluyor.

```bash
    $ php bin/console make:entity
```

Console size adım adım sorular sorarak yardımcı oluyor.

## Twig

Symfony’nin beğendiğim özelliklerden bir tanesi de Twig şablon motoru.

Twig, HTML ile PHP kodlarını ayırarak tasarımcılar için sade bir arayüz sunuyor.

<script src='https://gist.github.com/ertankayalar/8018bc3b344a6ebc4af0f81c1a22391d.js'></script>

Symfony 4’de Twig klasörü `/templates` klasörüne taşındı. Templates klasörü birinci sınıf vatandaşlığa geçmiş oldu. Twig şablonları artık bu klasörde.

Bu klasör Twig bundle kurulduğunda oluşturuluyor. Ana klasöre taşınmasının nedeni, tasarımcılara daha rahat çalışma imkanı getirmek. Elbette herşey opsiyonel.

## Sonuç

Symfony, aktif katılımcı topluluğu ve detaylı dökümanları ile projeleriniz için mutlaka dikkate almanız gereken bir framework.
Kişisel olarak görüşüm, projeleriniz için iyi bir tercih olacaktır. Her [yazılım uzmanı](https://ertankayalar.com.tr/blog/yazilim-uzmani-olmak/) için mutlaka incelenmesi gereken bir framework.

Symfony bir yazıda ele alınmayacak kadar büyük bir framework. Symfony incelemesine sonraki yazılarımda devam edeceğim.
