
let lastItem = document.querySelector("ul#list>li:last-child") // burada ul nin list id'li li elementinin last child!ını seçtik
lastItem.innerHTML = "son oge değişti" //innerHtml kullanarak last itemi değiştirdik
console.log(lastItem); // konsola yazdırdık on öge değişti şeklinde

let firstItem = document.querySelector("ul#list>li:first-child") //Yukarıdaki işlemiilk element için yapmış olduk 
firstItem.innerHTML = "ilk oge değişti"
console.log(firstItem)

// yeni bir item ekleme
let ulDom = document.querySelector("ul#list"); // burada öncelikle id'si list olan ul seçildi 
let liDom = document.createElement("li") // daha sonrasında burada o list item içerisinde yeni bir li elementi oluşturuldu.

liDom.innerHTML = "yeni ögemiz" // innerHtml propertisi ile yeni ögemiz adında li elementine atama yapıldı şimdi ekleme zamanı

ulDom.append(liDom) // append metodu ile ögemiz sona eklendi
ulDom.prepend(liDom) // prepend metodu ile ögemiz başa eklendi