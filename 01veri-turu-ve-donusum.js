//veri türünü öğrenmek ve veri dönüşümleri

//veri türü öğrenmek 
let price = 11
let stringPrice = "111"
let hasPassword = true

console.log(
    "price:  ",
    typeof(price)
)
//number Veri tipi olarak döner
console.log(
    "stringprice:  ",
    typeof(stringPrice)
)
// string veri tipi olarak döner
console.log(
    "hasPassword:  ",
    typeof(hasPassword)
)
//boolean veri tipi olartak döner

//string bilgiyi int ve float'a dönüştürmek
let number1 ="11";
console.log("number1:",parseInt(number1)) 
//console görüntüsü number: 11 string veri number'a dönüştü
number1 = parseInt(number1)
// artık number1 typeof'u da number olmuştur.
let number2 ="11px";
number2 = parseInt(number2)
console.log("number2: ", number2, typeof(number2))
// console görüntüsü number2: 11 number yani hem number oldu hemde yanındaki yazılar gitti
let number3 ="11px";
number3 = Number(number3)
console.log("number2: ",number3, typeof(number3))
// console görüntüsü number3: Nan oldu yandaki string ifadeyi çevirmedi,1. örnekte kullanımı daha doğru olurdu
let number4 ="11.4px";
number4 = parseFloat(number4)
console.log("number2: ",number4, typeof(number4))
//console ekran görüntüsü number4: 11.4 number oldu 

//number veriyi string yapmak
let number5 = 55
number5=number5.toString()
console.log(number5, typeof(number5))
//burada da tam tersi olarak Number veriyi String veri tiğine dönüştürdük. 

