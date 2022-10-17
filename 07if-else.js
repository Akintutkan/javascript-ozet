let kullanici = prompt("bir isim giriniz:");
//eğer kullanıcı bilgisi varsa ekrana ismini yazdır yoksa bilgi girişi iste
//eğer (kullanici.length > 0) {console.log(kullanici)} değilse {console.log("bilgi giriniz")}

if(kullanici){ //if kısmı her zaman true ise çalışır
    console.log(`kullanici adınız: ${kullanici}`) //eğer kullanici girişi varsa yazdırır
} else {
    console.log("bilgi giriniz") // kullanıcı girişi yoksa bunu yazdırır
}

console.log(kullanici.length> 0 && `kullanici adınız: ${kullanici}`) // yukarıdaki if else yapısını mantıksal oeratörler ile de
//oluşturabiliriz kullanıcının uzunluğu 0dan büyükse ve kullanıcı adını yazdır. 
console.log(kullanici.length == 0 && `bilgi girişi yapınız`)
// burasıda else koşulu kullanıcı uzunluğu 0 ise ve bilgi girişini yapınız.
