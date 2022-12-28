"use strict";

//*1-Soru 1: Odayı temizleme işlevi: [1,2,4,591,392,391,2,5,10,2,1,1,1,1,20,20] girdisinde , bunları sırasıyla ayrı bir dizide düzenleyen 
//bir işlev yapın . Örneğin cevap(YukarıdakiDizi) şunu döndürmelidir: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Dizileri sayı türlerinden farklı şekilde düzenlemesini sağlayın. yani [1, "2", "3", 2]  ----> [[1,2], ["2", "3"]]
// olarak döndürmelidir
//1- arr'ı büyükten küçüğe sırala
//2- eğer tekrar eden sayılar varsa bir arrayde topla
//3-bunları yeni bir arrayde tanımla
const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 1, 20, 20];
//1 Arrayi sort metodu ile sıraladık
const sortedArray =  array.sort()
console.log(sortedArray)
//2  //3
function groupNumbers(array) {
  // Grupları tutmak için bir dizi oluşturalım
  const groups = [];
  // Dizinin içinde gezmek için bir döngü oluşturalım
  for (let i = 0; i < array.length; i++) {
    // Bu rakam için bir grup bulalım veya oluşturalım
    let group = groups.find(group => group[0] === array[i]);
    if (!group) {
      group = [];
      groups.push(group);
    }
    // Rakamı gruba ekleyelim
    group.push(array[i]);
  }
  return groups;
}
console.log(groupNumbers(sortedArray))


//*Soru 2: Bir sayı dizisi ve hedeflenen sayıyı alan bir javascript işlevi yazın. İşlev, dizide birbirine eklendiğinde 
// hedef sayıyı veren iki farklı sayıyı bulmalıdır. Örneğin: answer([1,2,3], 4) [1,3] döndürmelidir

// const someArray = [1,2,3,4,5,6,7,8,9];
// const target = +prompt("hangi sayı?")
// function findPairs(array, target) {
//   const pairs = [];
//   // Dizinin içinde gezmek için bir döngü oluşturalım
//   for (let i = 0; i < array.length; i++) {
//     // Dizinin diğer elemanları ile birlikte i'inci elemanı toplayın
//     for (let j = i + 1; j < array.length; j++) {
//       // Eğer hedeflenen sayı bu iki sayının toplamı ise
//       if (array[i] + array[j] === target) {
//         // Bu iki sayıyı bir dizi olarak ekleyin
//         pairs.push([array[i], array[j]]);
//       }
//     }
//   }
//   return pairs;
// }
// console.log(findPairs(someArray,target))





//*Soru 3: HEX'i RGB'ye çeviren bir fonksiyon yazın. Ardından, bu işlevin biçimleri otomatik olarak algılamasını sağlayın, 
//böylece HEX renk biçimini girerseniz RGB'yi döndürür ve RGB renk biçimini girerseniz HEX'i döndürür.

// const color = prompt("renk girin")
//eğer değer # ile başlıyorsa hex'i rgbye çevirmesi için bir koşul örneği yazdık ve o fonksiyonu çalıştırdık.
//   color.startsWith('#') ? hexToRgb(color) : rgbToHex(color) 

//     function hexToRgb(color) {
//       let r = parseInt(color.slice(1, 3), 16);
//       let g = parseInt(color.slice(3, 5), 16);
//       let b = parseInt(color.slice(5, 7), 16);
//       console.log(`rgb(${r}, ${g}, ${b})`);
//     return
//     }
//   function rgbToHex(color) {
//   let parts = color.match(/\d+/g);
//   let r = parseInt(parts[0]).toString(16).padStart(2, '0');
//   let g = parseInt(parts[1]).toString(16).padStart(2, '0');
//   let b = parseInt(parts[2]).toString(16).padStart(2, '0');
//  console.log(`#${r}${g}${b}`);
//  return
// }
  


