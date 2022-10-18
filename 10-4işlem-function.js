//TODO Amacımız dört işlem yapabileceğimiz bir makine yapabilmek 
//* Bunu yaparken ilk önce fonksiyon içine bir ternary ifadesi yazıp makineyi oluşturabiliriz
//? Daha sonra ilk önce fonksiyonları oluşturup daha sonra koşul ifadeleriyle bunları çağırabilriz
//!!! Birinci yol daha kısa yazım ama biraz karmaşık // ikinci yol daha anlaşılır ama uzun yazım

let num1 =Number( prompt(`Lütfen bir "sayı" giriniz`))
 let num2 = Number(prompt(`Lütfen bir "sayı" daha giriniz`))
 let işlem = prompt(`LÜtfen yapmak istediğiniz işlem türünü (+,-,/,*) giriniz`)
dörtİşlem = (num1,num2,işlem) =>{


//!!! Ternary Operators
işlem === "+" ? console.log(`işleminiz Toplama sonuç : ${sonuç = num1 + num2}`) : 
işlem === "-" ? console.log(`işleminiz Çıkarma sonuç : ${sonuç = num1 - num2}`) : 
işlem === "*" ? console.log(`işleminiz Çarpma sonuç : ${sonuç = num1 * num2}`) : 
işlem === "/" ? console.log(`işleminiz Bölme sonuç : ${sonuç = num1 / num2}`) : 
console.log("hatalı değer")


//??? Logical Operators
// işlem === "+" && console.log(`işleminiz Toplama sonuç : ${sonuç = num1 + num2}`)
// işlem === "-" && console.log(`işleminiz Çıkarma sonuç : ${sonuç = num1 - num2}`)
// işlem === "/" && console.log(`işleminiz Bölme sonuç : ${sonuç = num1 / num2}`)
// işlem === "*" && console.log(`işleminiz Çarpma sonuç : ${sonuç = num1 * num2}`)
// işlem !== "*" || işlem !== "/" || işlem !== "-" || işlem !== "+" && console.log("hatalı işlem")

return sonuç 
}
dörtİşlem(num1,num2,işlem)
 
// toplama = (num1,num2) => {
//     sonuç = num1 + num2
// return console.log(`işleminiz Toplama sonuç ${sonuç}`)
// }
// çıkarma = (num1,num2) =>{
//     sonuç = num1 - num2
//     return console.log(`işleminiz Çıkarma sonuç ${sonuç}`)
// }
// bölme = (num1,num2) =>{
//     sonuç =num1 / num2
//     return console.log(`işleminiz Bölme sonuç ${sonuç}`)
// }
// çarpma = (num1,num2) =>{
//     sonuç = num1 * num2
//     return console.log(`işleminiz Çarpma sonuç ${sonuç}`)
// }
//***  İf-Else Statement
// if(işlem === "+") {
//     toplama(num1,num2)
// } else if(işlem ==="-") {
//     çıkarma(num1,num2)
// }else if(işlem === "/"){
//     bölme(num1,num2)
// }else if(işlem === "*"){
//     çarpma(num1,num2)
// }else{
//     console.log("Hatalı işlem türü")
// }
//!!! Ternary operators
// işlem === "+" ? toplama(num1,num2) :
// işlem === "-" ? çıkarma(num1,num2)  :
// işlem === "/" ? bölme(num1,num2) :
// işlem === "*" ? çarpma(num1,num2) :
// console.log("hatalı işlem")

//??? Logical operators

// işlem === "+" && toplama(num1,num2) 
// işlem === "-" && çıkarma(num1,num2)  
// işlem === "/" && bölme(num1,num2) 
// işlem === "*" && çarpma(num1,num2) 
// işlem !== "*" || işlem !== "/" || işlem !== "-" || işlem !== "+" && console.log("hatalı işlem")