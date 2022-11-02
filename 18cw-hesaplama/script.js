// const calc = () => {
const pieceElem = +document.querySelector(".piece").value
const longElem = +document.querySelector(".long").value
const wideElem = +document.querySelector(".wide").value
const heightElem = +document.querySelector(".height").value
const grossElem = +document.querySelector(".gross").value
const volumeWeight = document.querySelector(".volumeweight")
const volume = document.querySelector(".volume")
const totalCw = document.querySelector(".totalcw")

// const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
// volumeWeight.innerHTML = CalculateVolumeweight
// const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
// volume.innerHTML = CalculateVolume
// document.querySelector(".volume1").innerHTML = CalculateVolume

// //console.log(pieceElem,longElem,wideElem,heightElem,grossElem)
// //console.log(volumeWeight.innerHTML)
// console.log(pieceElem)

// totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}



// document.querySelector(".submit").addEventListener("click",calc)

const tableBody = document.getElementById("table-body")
const dataArr =[
 pieceElem.innerHTML,longElem,wideElem,heightElem,grossElem,volumeWeight,volume,totalCw
]
console.log(dataArr)



function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 9; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 10; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode(dataArr[j]));
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}
addTable();



