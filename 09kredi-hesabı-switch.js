// not hesabı yapıp kredi notları yazdıracağız
//100-90 arası AA
//90-80 arası BA
//80-70 arası BB
//70-60 arası CB
//60-50 arası CC
//50-40 arası DC
//40-35 arası DD
//35-0 arası FF
// Final nıtu 50 altında olamaz
const vize =  prompt("Vize notu giriniz") 
const final = prompt("Final notu giriniz")
const hesap = (((vize/100)*40) + ((final/100)*60))
switch (true) { // Hocam burada hesap değişkenini koyduğumda caselerde aritmetik işlemleri yaptıramadım
    // internetten böyle bir çözüm buldum hesap değişkenini koyduğumda benden direkt bir sayı aralığı değil sayı istedi. 
  case hesap >= 90 && hesap <= 100 && final > 50:
    console.log(`Puanınız ${hesap} Harf notunuz: AA`);
    break;
  case hesap >= 80 && hesap < 90 && final > 50:
    console.log(`Puanınız ${hesap} Harf notunuz: BA`);
    break;
  case hesap >= 70 && hesap < 80 && final > 50:
    console.log(`Puanınız ${hesap} Harf notunuz: BB`);
    break;
  case hesap >= 60 && hesap < 70 && final > 50:
    console.log(`Puanınız ${hesap} Harf notunuz: CB`);
    break;
  case hesap >= 50 && hesap < 60 && final > 50:
    console.log(`Puanınız ${hesap} Harf notunuz: CC`);
    break;
  case hesap >= 40 && hesap < 50 && final > 50:
    console.log(`Puanınız ${hesap} Harf notunuz: DC`);
    break;
  case hesap >= 35 && hesap < 40 && final > 50:
    console.log(`Puanınız ${hesap} Harf notunuz: DD`);
    break;
  default:
    // burada iç içe bir yapı kullanmak istedim  100 puanın üzerinde olduğunda hata yakalamak için başka bir yolu olabilir miydi 
    //switch içerisinde if ifadesi olmayınca örn 120 puan FF olarak çıkıyor. if bloğunu yazmak yerine 
    // switch içerisinde kullanabilir miydim.
    if (hesap>100) {
        console.log(`Puanınız ${hesap} olamaz yanlış not girdiniz.`)
    }else if (final < 50){
       console.log(`Puanınız ${hesap} ancak final notunuz ${final} olduğu için Notunuz aşağıdadır. `)
    }
    console.log(`Puanınız ${hesap} Harf notunuz: FF `);
    break;
}
