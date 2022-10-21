// TODO
// todo AMAÇ her meyvenin kasa adeti yoğunluğu ve bu yoğunluğa göre taşıyacak aracı olacaktır.
// todo örn 5 kasa meyve 1.33 yoğunlukta karpuz 100dan büyükse minibüs 200den büyükse kamyonet 300dan büyükse kamyontaşır gibi

const elma = 1.35;
const portakal = 1.45;
const karpuz = 2.75;

//! Burada ürünün hacmini bulduk
const hesap = (kasa, meyve) => {
  return kasa * meyve;
};

//! Ana fonksiyonda ilk fonksiyonu kullanmamız lazım
const taşıma = (araç) => {
  araç <= 100               ? console.log(`${araç} Kg meyve otomobille taşınabilir `) :
  araç > 100 && araç <= 200 ? console.log(`${araç} Kg meyve minivanla taşınabilir `) :
  araç > 200 && araç <= 300 ? console.log(`${araç} Kg meyve kamyonetle taşınabilir `) :
  araç > 300 && araç <= 400 ? console.log(`${araç} Kg meyve kamyonla taşınabilir `) : 
  console.log(`${araç} Kg meyve için daha büyük bir araca ihtiyacınız var. `) 
return 
};
//? Neden taşıma fonksiyonuna kasa ve meyve parametrelerini yazdıramadık ve fonksiyon içinde fonksiyon işlemini yapabildik mi?
taşıma(hesap(50, elma) + hesap(30, portakal) + hesap(40, karpuz));
taşıma(hesap(50, portakal) + hesap(10,karpuz));
taşıma(hesap(60, karpuz));
taşıma(hesap(80, elma) + hesap(70,portakal) + hesap(70,karpuz))


