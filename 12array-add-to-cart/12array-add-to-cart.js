// TODO amacımız bir cart arrayi oluşturup bu array içerisine ismi fiyatı ve stoğu belli olan bir ürünler arrayinden
// Todo seçilen ürünleri göndermek şuan ki bilgilerimizle neler yapabileceğimiz konusunda kendimizi görmek
// Todo örneğin add to cart muz 2.99 true vişne 3.99 false false ise eklemesin true ise eklesin

const fruits = [ //* Meyveler
["Muz",13.99,false],
["Vişne",23.99,false],
["Armut",9.99,true],
["Karpuz",5.99,true]
]
const veggies = [ //* Sebzeler
["Brokoli",12.99,false], 
["Kabak",9.49,true],
["Domates",12.99,false],
["Patates",9.99,false],
["Patlıcan",7.99,true]
]
const allProduct = fruits.concat(veggies)
console.log(allProduct) //* arraylari birleştirdik


const filteredArr = (product) =>{return  cart = (product.filter(inner =>{return inner.includes(true)}))}
filteredArr(allProduct) //* arraylarin içerisinde true yani stokta olan ürünleri döndük bulduk
console.log(cart)
