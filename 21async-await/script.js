// 'use strict';
const loadData = async () => {
  try{
const url1 = `https://hp-api.herokuapp.com/api/characters/`
const url2 = `https://hp-api.herokuapp.com/api/characters/house/Gryffindor`
const url3 = `https://hp-api.herokuapp.com/api/spells`

const results = await Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3)
])
const finalData = await Promise.all(results.map(result => result.json()))
console.log(finalData)
return finalData
// console.log(results)
// const res1 = await fetch(url1)
// const data1 = await res1.json()
// const res2 = await fetch(url2)
// const data2 = await res2.json()
// const res3 = await fetch(url3)
// const data3 = await res3.json()
// return [data1,data2,data3]
}catch(err){
  console.error(err)
}
};
 //TOPLEVEL ASYNC
 (async () =>{
  const data =  await loadData()
  console.log(data)
 })()




//  data.filter(item => {const gender = item.gender   
// const maleWizard = []
// const femaleWizard = []
// for (let i = 0; i < responseJson.length; i++) {                
//   responseJson[i].gender === `male` ? maleWizard.push(responseJson[i]) : femaleWizard.push(responseJson[i]) 
// }
// console.log( maleWizard)
// console.log(femaleWizard)
// })