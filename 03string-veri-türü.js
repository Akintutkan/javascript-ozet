//String veri türü

let email = "akin.tutkan@gmail.com";
let fName = "akın";
let lName = "TUTKAN"

// String karakter sayısı .length
console.log(email.length) //.length kullanımı çok yaygındır. konsol görüntüsü 21dir

// ilk karakteri bulmak [0]
console.log(fName[0])
console.log(fName.charAt(0)) // iki kullanımda aynı sonucu verir Sıfır burada sıfırıncı karakteri işaret eder.
//biz burada başka bir karakteri bulmak isteseydik [] içine başka bir sayıyı atayabilirdik. Genel kullanımda [] daha çok kullanılır chartAt yerine

// büyük küçük harf yapma: toLowerCase toUpperCase
fName = fName.toUpperCase()
console.log(fName) // konsol görüntüsü AKIN oldu ve bu şekilde değiştirldi
fName =fName.toLowerCase();
console.log(fName)  // konsol görüntüsü akın oldu ve yien değiştirildi

//String ifade içerisinde istenilen bilgiyi aramak .search
console.log(email.search("@")) //burada konsol görüntüsü 11 oldu 11. karakter @ karakteridir.
console.log(email.search("tutkan")) // burada konsol görüntüsü 5 oldu yani kelime de yazılsa başlangıcı baz alır.
console.log(email[11])  // sağlaması gibi düşünülebilir bununda cevabı @ karakteri çıkacaktır.
console.log(email.search("asd")) // konsol üzerinden değerimiz -1 dönecektir. olmayan bir ifade ya da harf -1 döner
//Belli bir yere kadar kesme alma .slice
// Örneğin emailde domain bilgisini almak istiyoruz ancak kaçıncı karakterden sonra olduğunu bilmiyoruz
let domain = email.slice(email.search("@")) // emaili slice ettik parçaladık sonrasında emailin @ elemanından sonrasını domaine tanımladık
console.log(domain) // konsol görüntüsü @gmail.com oldu peki @ almak istemezsek ne olur
let domain1 = email.slice(email.search("@") + 1)
console.log(domain1) // konsol görüntüsü gmail.com oldu neden +1 işimizi gördü çünkü .search("") ifadesi bize number bir ifade döndü
//peki sadece email adresini istesek gmail mesela .com u atmak istiyoruz
console.log(domain1.indexOf(".")) // konsol değerimiz 5 geldi şimdi benim slice metodu ile 5ten sonrasını atmam gerek
let domain2 =domain1.slice(0,5); // domain1 değerini 0dan 5e kadar slice edip parçalayıp yani domain2ye tanımladık.
//let domain2 = domain1.slice(0,domain1.indexOf(".")) kullanılabilirdi üst satı yerine çünkü indexofta bize number ifade verir
console.log(domain2) // konsol görüntüsü gmail oldu

//Bilginin yerini değiştrime .replace
let newEmail = email.replace("gmail.com", "hotmail.com") //yeni bir email oluşturup email değişkeninin içeriğindeki gmaili hotmail yaptık
console.log(newEmail)

//İstediğimiz bilgiyi kontrol etme .includes
console.log(email.includes("gmail")) //konsolda true döner bize includes boolean search number döner
console.log(email.includes("hotmail")) //konsolda false döner geriye aynı işlemi search ile yapsaydık -1 dönecekti

//girilen vbilgi ile başladı bitti mi kontrolü startsWith, endsWith
console.log(email.endsWith("gmail.com")) // konsol dönüşü true olur
console.log(email.startsWith("ahmet")) // false döner

//ilk harfleri büyük yapma
let fullName = `${fName[0].toUpperCase()}${fName.slice(1)} ${lName[0]}${lName.toLowerCase().slice(1)}`
//burada öncelikle fname ilk elemanı büyük yaptık ardına fname ekleyip Aakin değeri geldi burada fname 1 karakteri slice edip 
//attık Akin oldu sonrasında lname[0] ıncı elemanını aldık T ardından lname'i küçük harfe çeverdik Ttutkan oldu ardından lname
// birinci elemanını attık Tutkan kaldı elimizde
 
console.log(fullName)
