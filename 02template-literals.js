// Template Literals

let user = "Akın.tutkan";
const domain = "gmail.com";

let email = (user + "@" + domain); // birden fazla değişkeni birleştirme işlemi yaptık konsol görüntüsü akin.tutkan@gmail.com

console.log("Merhaba",user,"hoşgeldiniz","mail adresim",email)
// konsol görüntüsü merhaba Akin.tutkan hoşgeldiniz mail adresim akin.tutkan@gmail.com
// biz bir paragraf yazmak istersek ya da değişkende farklı işlemler farklı birleştirme işlemleri yapmak istersek
//template literals kullanabiliriz template literals `${}` şeklinde kullanılır.

let info = `Merhaba ${user} hoşgeldiniz mail adresim ${email}`
//yukarıdaki konsol ifadesini `${} kullanarak virgülsüz ve "" işaretleri olmadan daha hızlı bir şekilkde yazmış olduk

let paragraf =
`Mail adresinin uzunluğu: ${email.length}
Borç tutarı: ${(6 + 5)*25} $ 
Saat: ${new Date().getHours()}
Baş harfiniz: ${user[0]}. 
`
// template literals sayesinde kolay bir şekilde fonksiyon kullanıldı,değişken tanımlandı ve  matematiksel işlem yapıldı ayrıca bir paragraf
//yazımı dahi kolay bir şekilde yapıldı.
