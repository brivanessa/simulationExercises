// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome
//palindrome 
//console.log('object')

function palindrome  (frase) {
const palabra = frase.toLowerCase()
let codigo = []
for(let i=0; i<palabra.length; i++ ){
    //97 -122
    let letra = palabra[i].charCodeAt(0)
    codigo.push((letra>=97) && (letra<=122))
}
return (codigo.includes(false)?true:false)
}

console.log(palindrome ("race a car"))