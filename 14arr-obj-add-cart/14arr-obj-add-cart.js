const fruits = [ //* Meyveler
{ürün :"Muz",fiyat:25.90,stok:false,},
{ürün :"Limon",fiyat:23.90,stok:false},
{ürün :"Armut",fiyat:24.90,stok:true},
{ürün :"Karpuz",fiyat:8.90,stok:true}
]
const veggies = [ //* Sebzeler
{ürün :"Biber Kırmızı",fiyat:35.90,stok:false}, 
{ürün :"Kabak",fiyat:16.90,stok:true},
{ürün :"Domates",fiyat:18.90,stok:false},
{ürün :"Soğan",fiyat:16.90,stok:false},
{ürün :"Patlıcan",fiyat:19.90,stok:true}
]
const allProduct = fruits.concat(veggies)
console.log(allProduct)                                          //! arraylari birleştirdik
cart = []
customerCart=[] 
 //const filteredArr = (product) =>{return  cart = (product.filter(inner =>{return inner.stok}))}
//filteredArr(allProduct)                                        //! arraylarin içerisinde true yani stokta olan ürünleri döndük bulduk
  for (let i = 0; i < allProduct.length; i++) {                
    allProduct[i].stok === true && cart.push(allProduct[i])      //! Yukarıdaki fonk ile aşağıdaki for ile atama
}                
const calculate = (kilo,fiyat)  => kilo * fiyat                  //! sepetin içindeki ürünlerin tutarını  hesaplayan fonksiyon 

for (let i = 0; i < cart.length ; i++) {
    cart[i].kilo = prompt(`Kaç kilo ${cart[i].ürün} istersiniz`) //! Kullanıcıdan interaktif şekilde true olan ürünler için kilo istedik
    customerCart.push(calculate(cart[i].kilo,cart[i].fiyat))     //! Toplam tutar fonksiyonu ile yeni bir arraye atayıp hesapladık 
    }                                                 
    console.log(cart)
    
    alert(`
    Bizi seçtiğiniz için teşekkürler fişinizi almayı unutmayınız.!!!!
    Sepetinizin Toplam Bedeli ${(customerCart.reduce((acc,cur) => acc + cur)).toFixed(2)} TL'dir`) 
    console.log(`Sepetinizin Toplam Bedeli ${(customerCart.reduce((acc,cur) => acc + cur)).toFixed(2)} TL'dir`)

// 
                                                               //* en son hesaplanan bedelleri topladık 


