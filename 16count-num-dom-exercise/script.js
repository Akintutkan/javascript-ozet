//!Butonları değişken olarak tanımladık.
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const restart = document.querySelector(".reset");
const result = document.querySelector(".result");
//? renkli olmasını istemezsek bu kadarı yeterliydi
// increase.addEventListener("click", () =>{result.innerHTML++})
// decrease.addEventListener("click", () =>{result.innerHTML--})
// restart.addEventListener("click", () =>{result.innerHTML = 0})
//! değişkenlerle tanımladığımız butonlara renk için fonksiyon oluşturup koşul ekledik
function color() {
  if (result.innerHTML < 0) {
    result.style.color = "#f03e3e";
  } else if (result.innerHTML > 0) {
    result.style.color = "#37b24d";
  } else {
    result.style.color = "#000000";
  }
}
//! daha sonra bu renk fonksiyonunu çağırdık 
decrease.addEventListener("click", () => {
  result.innerHTML--;
  color();
});
increase.addEventListener("click", () => {
  result.innerHTML++;
  color();
});
restart.addEventListener("click", () => {
  result.innerHTML = 0;
  color();
});
