// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome
//palindrome 
//console.log('object')

//funcion que retorna 'false' si el string solo contiene letras y true si no solo contiene letras
function palindromeError  (frase) {
const palabra = frase.toLowerCase()
let codigo = []
for(let i=0; i<palabra.length; i++ ){
    //97 -122
    let letra = palabra[i].charCodeAt(0)
    codigo.push((letra>=97) && (letra<=122))
}
return (codigo.includes(false)?true:false)
}

// EJERCICIO RESUELTO:
//funcion que retorna 'false' si el string no es palindromo y true si es palindromo
function palindrome  (frase) {
    const palabra = frase.toLowerCase()
    let codigo = []
    for(let i=0; i<palabra.length; i++ ){
        //97 -122
        let letra = palabra[i].charCodeAt(0)
        codigo.push(((letra>=97) && (letra<=122))?palabra[i]:'')
    }
    
    let palabraString=codigo.join('')
    let codigoReverse=codigo.reverse()
    let palabraReverse=codigoReverse.join('')
    return (palabraString===palabraReverse)
    }
    
    console.log(palindrome ("A man, a plan, a canal: Panama")
    console.log(palindrome ("race a car")
