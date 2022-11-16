// const container =document.querySelector(".container")

// const wait = function(seconds){
//     return new Promise(function(resolve) {
//         setTimeout(resolve,seconds * 1000)
//     })
// }

// const createImage = function(imgPath){
//     return new Promise(function (resolve,reject) {
//         const imageFile = document.createElement("img");
//         imageFile.src = imgPath;
//         imageFile.onload = () =>{
//             resolve(imageFile)
//         }
//         imageFile.setAttribute("class","images")
//     })
// };
// wait(1)
//   .then(() => {
//     createImage("./img/img-1.jpg").then((data) => {
//       container.append(data);
//     });
//     return wait(1);
//   })
//   .then(() => {
//     const myImg = document.querySelector(".images");

//     myImg.style.display = "none";
//     createImage("./img/img-2.jpg").then((data) => {
//       container.append(data);
//     });
//     return wait(1);
//   })
//   .then(() => {
//     const myImg1 = document.querySelectorAll(".images")[1];

//     myImg1.style.display = "none";
//     createImage("./img/img-3.jpg").then((data) => {
//       container.append(data);
//     });
//     return wait(1);
//   }).catch(error =>{
//     console.log(`Bir sorun var ${error}`)
//   })

// ///********************              Challange 2 */

const loadNPause = async function (seconds){
  return new Promise(function(resolve) {
      setTimeout(resolve,seconds * 1000)
  })
} 
const createImage = function(imgPath){
    return new Promise(function (resolve,reject) {
        const imageFile = document.createElement("img");
        imageFile.src = imgPath;
        imageFile.onload = () =>{
            resolve(imageFile)
        }
        imageFile.setAttribute("class","images")
    })
};
// function loadAll(imgArr){
//   imgArr.map(image =>{
//       await loadNPause()
//   })
// }