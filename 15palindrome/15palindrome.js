let str = prompt(`Düşündüğünüz ifadeyi giriniz.
Giriniz ki size Palindrome olup olmadığını söyleyeyim.`)
let reverseArr = []
for (let i = str.length -1 ; i >= 0; i--) {
reverseArr.push((str[i]))
}
let reverseStr =reverseArr.join("")
str === reverseStr ? console.log(`Girdiğiniz ${str} değeri bir Palindrome'dur`) : console.log(`Girdiğiniz ${str} değeri bir Palindrome  değildir.`)