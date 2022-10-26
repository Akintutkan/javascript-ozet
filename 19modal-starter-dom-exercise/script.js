'use strict';
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnShowModal = document.querySelectorAll(".show-modal") // All dediğimizde htmldeki 3 show modalı da bize verdi

const closeModal = () =>{
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
const openModal =() =>{
modal.classList.remove("hidden") 
overlay.classList.remove("hidden")  
}
//addEventListener //addeventhandler hemen hemn aynı şey 
// textcontent ilgilinin içeriğini gösterir
// for (let i = 0; i < btnShowModal.length; i++) {
//     btnShowModal[i].addEventListener("click", ()=> { 
// modal.classList.remove("hidden") //burda nokta kullanmadık. yani butona tıklayınca hidden clasını kaldırdı.
// overlay.classList.remove("hidden")  // arkayı blurladı
// modal.style.display = "block" // üst satırla aynı   
// })
// }

//Her butonun tıkladığında aynı şeyi yapmasını sağladık
// btnCloseModal.addEventListener("click", ()=> {
// modal.classList.add("hidden")
// overlay.classList.add("hidden")

// })
//  //kapatma butonu
//  overlay.addEventListener("click",() =>{
//     modal.classList.add("hidden")
// overlay.classList.add("hidden")
//  })
// Kısa yolu fonksiyon tanımlayıp
for (let i = 0; i < btnShowModal.length; i++) {
        btnShowModal[i].addEventListener("click", openModal)
}
btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown",function(e){
   // console.log("tuşa basıldı")
   console.log(e.key) //ile basılan tuşa ulaşıldı
e.key === "Escape" && !modal.classList.contains("hidden") && closeModal() 
    //console.log("Escape  basıldı")
//if(!modal.classList.contains("hidden")){
 //   closeModal()
//}
}
)