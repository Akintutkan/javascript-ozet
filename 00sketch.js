"use strict";

//*1-Soru 1: Odayı temizleme işlevi: [1,2,4,591,392,391,2,5,10,2,1,1,1,1,20,20] girdisinde , bunları sırasıyla ayrı bir dizide düzenleyen 
//bir işlev yapın . Örneğin cevap(YukarıdakiDizi) şunu döndürmelidir: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Dizileri sayı türlerinden farklı şekilde düzenlemesini sağlayın. yani [1, "2", "3", 2]  ----> [[1,2], ["2", "3"]]
// olarak döndürmelidir
//1- arr'ı büyükten küçüğe sırala

//2- eğer tekrar eden sayılar varsa bir arrayde topla

//3-bunları yeni bir arrayde tanımla

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 1, 20, 20];
//1 
const sortedArray =  array.sort()
console.log(sortedArray)
//2  //3
//! Yararlandığımız methodlar reduce ve in operatörleri
  const groupedArray = Object.values( 
    sortedArray.reduce(
      (acc, curr) => (
        (acc[curr] = curr in acc ? [...acc[curr], curr] : [curr]), acc
      ),
    {}
    )
  );
  console.log(groupedArray)

//*Soru 2: Bir sayı dizisi ve hedeflenen sayıyı alan bir javascript işlevi yazın. İşlev, dizide birbirine eklendiğinde 
// hedef sayıyı veren iki farklı sayıyı bulmalıdır. Örneğin: answer([1,2,3], 4) [1,3] döndürmelidir

const someArray = [1,2,3,4,5,6,7,8,9];





//*Soru 3: HEX'i RGB'ye çeviren bir fonksiyon yazın. Ardından, bu işlevin biçimleri otomatik olarak algılamasını sağlayın, 
//böylece HEX renk biçimini girerseniz RGB'yi döndürür ve RGB renk biçimini girerseniz HEX'i döndürür.

const color = prompt("renk girin")
function checkColorFormat(color) {
  if (color.startsWith('#')) {
    return function hexToRGB(color) {
      let r = parseInt(color.slice(1, 3), 16);
      let g = parseInt(color.slice(3, 5), 16);
      let b = parseInt(color.slice(5, 7), 16);
      return console.log(`rgb(${r}, ${g}, ${b})`);
    }
  }else{
return function RGBToHex(color) {
  let parts = color.match(/\d+/g);
  let r = parseInt(parts[0]).toString(16).padStart(2, '0');
  let g = parseInt(parts[1]).toString(16).padStart(2, '0');
  let b = parseInt(parts[2]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}
  }
}
console.log(checkColorFormat(color))

// function rgbtoHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }
// function rgbToHex(r, g, b) {
//   return "#" + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
// }

// alert(rgbToHex(color)); // #0033ff

// // function hexToRgb(hex) {
// //   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
// //   return result ? {
// //     r: parseInt(result[1], 16),
// //     g: parseInt(result[2], 16),
// //     b: parseInt(result[3], 16)
// //   } : null;
// // }

// // alert(hexToRgb("#0033ff").g); // "51";


