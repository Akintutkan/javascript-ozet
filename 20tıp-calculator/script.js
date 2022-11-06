const calculating = () => {
  const price = +document.querySelector("#price").value;
  const tip = +document.querySelector("#tip").value;
  const person = +document.querySelector("#person").value;
  const result = document.getElementById("output");
  console.log(price, tip, person);
  console.log(price);
  const totalTip = ((price, tip) => (price * tip) / 100 + price);
  const tipRatio = ((price, tip) => (price * tip) / 100)
  const tipPerson = () => (tipRatio(price, tip) / person) // infinity
  const totalPerPerson = () => (totalTip(price, tip) / person)
  console.log(
    totalTip(price, tip),
    tipRatio(price, tip),
    tipPerson(),
    totalPerPerson()
  );

  result.innerHTML =
    person === 0 && " "
      ? `Total : ${totalTip(price, tip).toFixed(2)}
    Tip: ${tipRatio(price, tip).toFixed(2)}
    `
      : `Total : ${totalTip(price, tip).toFixed(2)}
    Tip: ${tipRatio(price, tip).toFixed(2)}
    Tip Per Person: ${tipPerson().toFixed(2)} 
    Total Per Person: ${totalPerPerson().toFixed(2)}
    `;
};
document.querySelector(".btn-calculate").addEventListener("click", calculating);



document.querySelector(".btn-reset").addEventListener("click", ()=> { 
price.value = "";
  tip.value = "";
  person.value = "";
  document.getElementById('output').innerHTML = "" // result.innerHTML = yazılınca çıkmadı
});
