// vize notu %40 final notu %60 alır 
// final notu minimum 50 olmalıdır
// proje ödevi vermeniz zorunludur.
// projenin ana nota katkısı %10 dur.

const vize =  prompt("vize notu giriniz")
const final = prompt("Final notu giriniz")
const proje = prompt("Proje notu giriniz")
const hesap = (((((vize/100)*40) + ((final/100)*60))/100)*90) + ((proje/100)*10) 
if (hesap >= 50 && final >= 50 && proje !== "" ) {
    console.log(`Notunuz ${hesap} sınavı geçtiniz.`)  
}else if(hesap > 50 && final < 50 && proje !== "" ){
    console.log(`Notunuz ${hesap} ama final notunuz ${final} kaldınız.`)
}else if(hesap >= 50 && final >= 50 && proje === "" ){
    console.log(`Notunuz ${hesap} ama Proje ödevi vermediniz kaldınız.`)
} else {
    console.log("Arkadaşınızda kalmalısınız :)")
}
