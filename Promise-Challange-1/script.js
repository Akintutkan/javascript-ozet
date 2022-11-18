//!       --- Challange 36
//Part-1
const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  };
  
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Görüntü Bulunamadı'));
    });
  });
};
// let mevcutImg
// createImage('img/img-1.jpg')
// .then((img) => { // hatalı yazılırsa catch çalışacaktır.
//   mevcutImg = img
//   console.log('1.Fotoğraf Yüklendi');
//   return wait(2)
// })
// .then(()=>{
//   mevcutImg.style.display = 'none'
//   return createImage("img/img-2.jpg")
// })
// .then((img)=>{
//   mevcutImg = img
//   console.log('2.Fotoğraf Yüklendi');
//   return wait(2)
// })
// .then(()=>{
//   mevcutImg.style.display = 'none'
//   return createImage("img/img-3.jpg")
// })
// .catch((err) => console.log(err))


//!     ---      Challange 37

// part 1
const loadNpause = async function (){
    try{
     // 1.fotoğraf yüklendi
    let img = await createImage('img/img-1.jpg')
    console.log('1.Fotoğraf Yüklendi');
    await wait(2)
    img.style.display = 'none'
    //2. fotoğraf yüklendi
    img = await createImage('img/img-2.jpg')
    console.log('2.Fotoğraf Yüklendi');
    await wait(2)
    img.style.display = 'none'
    img = await createImage('img/img-3.jpg')
    console.log('3.Fotoğraf Yüklendi');
    await wait(2)
    }catch(err){
      console.log(err)
    }
  }
  //loadNpause()
  //Part 2
  const loadAll = async function (imgArr){
    try{
      const imgs = imgArr.map(async (img) => await createImage(img))
   console.log(imgs)
   const imgsEl = await Promise.all(imgs)
   //console.log(imgsEl) 
   imgsEl.forEach(img => img.classList.add("parallel"))
    }catch(err){
      console.log(err)
    }
  }
  loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg'])