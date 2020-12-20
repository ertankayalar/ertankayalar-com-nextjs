---
title: 'Yazılım Mimarisi Tasarlarken Nelere Dikkat Etmeli ?'
date: '2018-11-05'
---

Yazılım mimarisi gri bir alandır. İleride tekrar dönmek istemeyeceğiniz kararlar almanız gerekir. Frameworkler, programlama dilleri, uygulama sunucuları, veritabanları vb alanlarda karar vermeyi gerektiren şeylerdir. Yazılım mimarisi programcının uygulamayı geliştirdiği ortamda gelişir. Source control, geliştirme araçları, IDE, soru cevap siteleri vb. [Yazılım uzmanı](/yazilim-uzmani-olmak/) projede başarılı olmak için doğru mimari kararlar almak zorundadır

Yazılım mimarisi tasarlarken aşağıdaki noktalara dikkat etmek gerekiyor.

- [Yazılım mimarisinde kötü kararların sonu fiyaskodur](#kotu-karar)
- [İyi yazılım mimarisi sessizdir](#sessiz)
- [Yazılım mimarisine gerekli olan minimum mimari ile başlayın](#minimum)
- [Projenizin sınırlarını göz önünde bulundurun](#sinirlar)
- [İhtiyacınız kadar geliştirin](#gelistirin)
- [Sürekli olarak teslim edin](#teslim)
- [Bir müşteriniz olsun](#musteri)
- [İsrafı önleyin](#israf)
- [Geri dönüşümü ve saydamlığı maksimize edin](#saydamlik)

## Yazılım mimarisinde kötü kararların sonu fiyaskodur {#kotu-karar}

Yazılım mimarisinde kötü kararlar alırsanız bunun bedeli geliştirdiğiniz projenizin tamamen fiyasko ile sonuçlanmasıdır. Çoğu gez u dönüşü yapmak zorunda kalırsınız.

Yazılım mimarisinde gelişigüzel eklemeler yaparak oluşturmaya kalkarsanız yazılım geliştirme işkence halini alabilir. Eğer ekip ile birlikte çalışıyorsanız durum daha da karmaşıklaşabilir. Diğer ekip arkadaşlarınız tasarımınızın ne olduğunu anlamadığında işler arapsaçına döner.

## İyi yazılım mimarisi sessizdir {#sessiz}

İyi yazılım mimarisi normal şartlarda gizli kalır. İyi mimariler, pek çok projede bir avantaj kazandırmaz. Sadece normal gelişime imkan verir.

Aşağıdaki prensip listesi, size güvenli ve ölçeklenebilir yazılım mimarileri geliştirmeye yardım eder.

## Yazılım mimarisine gerekli olan minimum mimari ile başlayın {#minimum}

Gereksiz karmaşadan daima kaçının. Her yeni teknolojiyi veya fikri uygulamak zorunda değilsiniz.

Projede kullanılacak herhangi bir mimari elementin iyi bir kullanım nedeni olmalıdır. Eğer mimari elementin faydaları veya gerekliliği kanıtlanmamışsa, bu mimari element kaldırılmalıdır.

## Projenizin sınırlarını göz önünde bulundurun {#sinirlar}

Yazılım mimarisini tanımlamak, birşeyleri projenizin kısıtlamalarına ve risklerine adapte etmektir.

Küçük bir startup proje için ve çok uluslu bir şirket projesi için aynı yazılım mimarisini kullanmamalısınız.

Ayrıca ekibinizin uzmanlığını da gözönünde bulundurmalısınız. Eğer belirli bir programlama dili veya framework’de deneyimlilerse ve tercih ettiğiniz başka bir tanesi yoksa muhtemelen onu kullanmalısınız.

Risk alanlarına dikkat etmelisiniz. Gerçekten ihtiyaç olan hizmetleri oluşturmak için gerekli ihtiyaçları düşünmelisiniz. Daha fazlasını değil.

Kısıtlamalar ve riskler sizi koltuğunuzda rahat rahat oturtmaz. Ancak yazılım mimarisinin gerçekten ihtiyaç gösterdiğinden de emin olmalısınız.

## İhtiyacınız kadar geliştirin {#gelistirin}

Mimari elementi mümkün olduğunca geciktirin, özellikle karmaşıksa.

Bazen ihtiyaçlar, karmaşık entegrasyonlar/frameworkler aramak gerekiyormuş gibi görünür. Bu tür durumlar için başlangıçta göz ardı etmeyi ve öncelikle mümkün olduğunca uçtan uca senaryoyu tamamlamak daha uygundur.

İlk senaryo tamamlandığında, o noktadan geliştirmeye, her seferinde bir adım atarak kullanıcı tarafından istenen yeni fonksiyonellikleri ekleyebilirsiniz.

Bu yol mimari elementin gerçekten gerekliliğine açıklık getirecektir. Eğer gerçekten gerekliyse projenizdeki diğer elementlerle nasıl entegre edeceğinizi de netlik getirmiş olacaksınız.

## Sürekli olarak teslim {#teslim}

Sürekli teslim (Deliver continously), yazılım mimarinizi rafine etmenizi sağlayan bir araçtır.

Sürekli teslimin 4 prensibi vardır:
a) Deliver soon – yakında teslim: kısa sürede teslimin amacı, müşterinizden geri dönüşüm devrini kısaltarak, değişiklik taleplerinde gerekli değişiklikleri yapmanıza izin vermektir.

b) Deliver many times – pek çok defa teslim: pek çok defa teslim geri dönüşümün pürüzsüz olmasını sağlar.

c) Bug free – hatasız : kod kritik hatalardan temizlenmelidir

d) Production ready – kullanıma hazır : herhangi bir anda dağıtılabilir olmalıdır.

## Bir müşteriniz olsun {#musteri}

Bir müşteri gibi davranacak birine sahip olmalısınız. Yazılım mimarisinde öncelikler ve dağıtımlar konusunda karar vermek için faydalıdır. Eğer scrum metodunu kullanıyorsanız bu noktada zaten bir ürün sahibini belirlemeniz gerekecektir.

Doğru biçimde müşteri rolünde olan bir kişiye sayesinde aşağıdaki sorunları çözebilirsiniz:

- Başarısızlık nedenleri
- Geliştirme sırasında yanlış yönlendirmeler
- Geliştirilen ürünün bekletilerdeki uyuşmazlıkları

## İsrafı önleyin {#israf}

Bazen yazılım mimarisi aşırıya kaçamasınıza öncülük edebilir. Acemi yazılım mimarisi, uygulamanın mevcut mimarisinin kağıt üzerindeki ile aynı olduğuna ve size geleceği görüyormuş gibi yapar.
Bu özellikle waterfall benzeri işlemleri takip eden şirketlerde olur, bazen kaçınılmaz olarak, döküman/diagram vb üretmeye zorlar.

Aşırıya kaçılmış yazılım mimarisi/uygulama tasarımı sadece kötü değil savurganlıktır da. Temel risk, geliştirme ekibinin temel tanımlardan uzaklaşıldığına inanılmasına neden olur. Gelecek değişikliklerin adapte edilmesini çok güçleştirir.

## Geri dönüşüm ve saydamlık maksimumda olsun {#saydamlik}

Geri dönüşüm ve saydamlık müşteri için kötü süprizlerin olmamasını garantiler. Güvenilir ve verimli bir ilişkinin oluşturulmasına yardım eder.

Herhangi bir proje için geri dönüşümü ve saydamlığı maksimize etmek yazılım geliştirme işlemlerinin benzersiz hedeflerinden biridir.

Yanlış giden ne olursa olsun, müşteri tanımlamada değişikliğe gitsin, değişim gerektiğinde erken ve hazırlıklı bir tepkiye imkan verir.

Yazılım mimarisini tasarlamak projenin başında iyi düşünülmesi gereken bir aşamadır. İhtiyaçların analizinde başlayan yanlışlar genelde pek çok projenin kötü sona dönüşmesine neden olmuştur.

Kodlama çalışmalarında iyi bir programcı, zamanını kodlamadan daha çok düşünmeye ayırmalıdır.

Bu yazılar da ilginizi çekebilir:

[Özel yazılım çözümleri hakkında bilmeniz gerekenler](/ozel-yazilim-cozumleri/)

[Yazılım uzmanı olmak isteyenlere tavsiyeler](/yazilim-uzmani-olmak/)

Eğer bu yazıyı beğendiyseniz paylaşmayı unutmayın !
