'use strict'; 
//document herşeyin başı ve buradan yayılıyor dom tree
// console.log(document.querySelector(".message").textContent) // querySelector ile ulaştık textContent ile ne olduğunu gördük
// document.querySelector(".message").textContent ="Doğru Sayı" // html'de yine start guessing olarak yazar ancak konsolda  ve önyüzde artık doğru sayıdır
// document.querySelector(".number").textContent="!"
// document.querySelector(".score")=10
// console.log(document.querySelector(".guess").value)
// document.querySelector(".guess").value = 25
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let point = 20;
let highScore = 0
const screenMsg = function(msg){document.querySelector(".message").textContent = msg}
const messageScore = function(score){document.querySelector(".score").textContent = score}
const screenNum = function(num){document.querySelector(".number").textContent = num}

//! resetleme
document.querySelector('.check').addEventListener('click', function () {
  //Yapılan şey check btn seçildi ögeye tıklandığında ne yapacağına fonksiyon verip fonksiyon içerisinde
  //guess değerine girilen value verildi örnek 6 yazsak altı olur value
  // bir fonksiyon tanımlayıp event handler check btn tıklayınca ne yapılması gerektiği
  const prediction = Number(document.querySelector('.guess').value);
  console.log(prediction, typeof prediction);
  //! Değer girilmemiş
  if (!prediction) {
    screenMsg("Sayı Yok")
    //! Oyuncu kazanır
  } else if (prediction === secretNumber) {
    screenMsg('Doğru Sayı');
    screenNum(secretNumber)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(point > highScore){
      highScore = point
      document.querySelector('.highscore').textContent = highScore
    }
    //* Tahmin Yanlış Olduğunda
  } else if (prediction !== secretNumber) { 
    if (point > 1) {
      // document.querySelector('.message').textContent = 
      // prediction > secretNumber ? "Çok Yüksek" : "Çok Düşük"
      screenMsg(prediction > secretNumber ? "Çok Yüksek" : "Çok Düşük")
      point--;
      messageScore(point)
    } else {
      screenMsg('Oyunu Kaybettin');
      messageScore(0)
    }
  }
});
//! resetleme //
document.querySelector('.again').addEventListener('click', function () {
  point = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  screenMsg('Tahmin Et...');
  messageScore(point)
  screenNum("?")
  document.querySelector('.guess').value =" "
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';  
});












//TODO      --- --- --- --- --- --- --- UZUN YOLU

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let puan = 20;
// let yüksekPuan = 0
// //! resetleme
// document.querySelector('.check').addEventListener('click', function () {
//   //Yapılan şey check btn seçildi ögeye tıklandığında ne yapacağına fonksiyon verip fonksiyon içerisinde
//   //guess değerine girilen value verildi örnek 6 yazsak altı olur value
//   // bir fonksiyon tanımlayıp event handler check btn tıklayınca ne yapılması gerektiği
//   const tahmin = Number(document.querySelector('.guess').value);
//   console.log(tahmin, typeof tahmin);
//   //! Değer girilmemiş
//   if (!tahmin) {
//     document.querySelector('.message').textContent = 'Sayı Yok';
//     //! Oyuncu kazanır
//   } else if (tahmin === gizliNumara) {
//     document.querySelector('.message').textContent = 'Doğru Sayı';
//     document.querySelector('.number').textContent = gizliNumara;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if(puan >yüksekPuan){
//       yüksekPuan = puan
//       document.querySelector('.yüksekPuan').textContent = yüksekPuan
//     }
//     //! Yüksek Tahmin
//   } else if (tahmin > gizliNumara) {
//     if (puan > 0) {
//       document.querySelector('.message').textContent = 'Çok Yüksek';
//       puan--;
//       document.querySelector('.score').textContent = puan;
//     } else {
//       document.querySelector('.message').textContent = 'Oyunu Kaybettin';
//       document.querySelector('.score').textContent = 0;
//     }
//     //! Düşük Tahmin
//   } else if (tahmin < gizliNumara) {
//     if (puan > 0) {
//       document.querySelector('.message').textContent = 'Çok Düşük';
//       puan--;
//       document.querySelector('.score').textContent = puan;
//     } else {
//       document.querySelector('.message').textContent = 'Oyunu Kaybettin';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
// //! resetleme //
// document.querySelector('.again').addEventListener('click', function () {
//   puan = 20;
//   gizliNumara = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Tahmin Et...';
//   document.querySelector('.score').textContent = puan;
//   document.querySelector('.number').textContent = "?"
//   document.querySelector('.guess').value =" "
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';  
// });
