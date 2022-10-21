//? Object Methods
//! Buraya tekrar bak
//Todo buraya tekrar bak
//* buraya tekrar bak

const murat = {
  //this anahtar kelimesi murata eşittir
  adı: "Murat",
  soyadı: "Akdağ",
  dogumYılı: 1986,
  iş: "öğretmen",
  arkadaşlar: ["kerem", "tuğçe", "bora"],
  ehliyetiVarMı: true,
  //yaşHesap: function(dogumYılı){return 2040-dogumYılı} // bu ilev dışarıda da çağırılabilir //!console.log(murat.yaşHesap(1986))
  //yaşHesap: function(){return 2040-this.dogumYılı} // this murata eşitlenmiştir. bu fonksiyonu çağırırken function içine
  //değer çağırmmam gerekmez  1986ya ya da doğumyılını yazmama gerek yok //! //console.log(murat.yaşHesap())
  yaşHesap: function () { this.yaş = 2040 - this.dogumYılı;
    return this.yaş;
  },

  özet: function () {
    return `${this.adı} ${this.yaşHesap()} yaşında ${this.iş}dir ve ${this.ehliyetiVarMı ? "ehliyeti var" : "ehliyeti yok"}. `;
},
};
console.log(murat);
console.log(murat.yaşHesap())
console.log(murat.yaş) // bir den çok kez yapacaksk önce fonk çağırıp bu şekilde devam edebilriz son çağırdığımız fonksiyonu bu şekilde yapabiliriz
console.log(murat["yaşHesap"](1986))

console.log(murat.özet());