
let price = "100"
let isim = "akın"
// == eşitse
console.log(price == 1) // konsol görüntüsü bize boolean veri tipinde döner yani 100 eşit mi 1 e diye sorgulayıp false yanıtını alırız
console.log(price == 100) // konsol görüntüsü String 100 eşit mi number 100 e diye sorgular tür olarak sorgulamadığı için true döner

// === hem değeri  hem türü eşitse
console.log(price === 100) //konsol görüntüsü bize string 100 number 100 e eşit mi diye sorgulatır burada hem değer hem tür 
//sorgulaması yapıldığı için bize false döner
console.log(price === "100") //konsol görüntüsü bize string 100 ile string 100 birbirine hem tür hem değer olarak eşit mi diye sorgular 
// burada dönüş true olarak gelir yani === sorgulaması tam olarak istediğimiz değer sorgulamalarında yaparız.

// != eşit değilse
console.log(isim != "ayten") //konsol görüntüsü true döner akın eşit değilse duyguya
console.log(isim != "akın") //konsol görüntüsü false döner akın eşit değilse akına halbuki eşit bu yüzden false
console.log(price != 100) // konsol burada false döndü  çünkü burada sadece değer için eşit değilse kontrolü yaptı
// yani string 100 number 100 e eşit değilse false döndü çünkü değer olarak eşit
console.log(price !== 100) //konsol burada true döndü çünkü string 100 number 100 e tür olrak eşit değil bu yüzden true döndü 

// < küçükse
console.log(price < 1000) //konsol true döner
// <= küçük veya eşitse
console.log(price <= 100) // konsol true döner
// > büyükse
console.log(price >99) //konsol true döner
// => büyük veya eşitse
console.log(price >= 100) //konsol true döner

//&& ve
 console.log(price === 100 && isim != "ayten") //false geldi price tür olarak eşit değil false isim akına eşit değil true 
 //&& operatörü iki koşulunda sağlaması gerekir ilk koşul false ikincisi true sonuç false
 console.log(price > 99 && isim != "ayten") //true geldi price 99dan büyük true akın duyguya eşit değil true sonuç true

// || veya
console.log(price === 100 || isim != "ayten") // true geldi ilk eşitlik false ama ikincisi true
//|| operatörü iki koşuldan birinin doğru olması durumunda true döner 
console.log(price > 99 || isim != "ayten") // ilk eşitlik true ikicisi de true sonuç true olur direkt
// ! değil(tersi)


console.log(price > 99 && isim == "ayten") //true geldi price 99 dan büyük true isim akına eşit true true ve true = true 
console.log(price > 99 && !isim == "ayten") // false geldi ilk koşul true ama ikinci koşulda true idi ama biz ! ile isim akına değil 
// dedik false geldi buradanda true && false = false geldi