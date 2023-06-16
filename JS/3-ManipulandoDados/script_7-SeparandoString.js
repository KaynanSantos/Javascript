//Manipulando String e Arrays

// Separe um texto que contem espaço, em um novo Array onde
//cada texto é uma posição do array. Despois disso, Transforme 
//o array em um texto e onde eram espaços , coloque _

let phrase = "Eu quero jogar bola!"
let myArray =phrase.split("")
console.log(myArray)

let phraseWidthUnderscore = myArray.join("_")
//JOIN Ele vai juntar
console.log(phraseWithUnderscore.toLowerCase())