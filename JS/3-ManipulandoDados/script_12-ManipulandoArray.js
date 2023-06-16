//Manipulando Arrays

let techs =[
  "html",
  "css",
  "js"
]

// adcionar um item no fim
console.log(techs.push("nodejs"))

// adcionar no começo
techs.unshift("sql")

// remover do fim 
//techs.pop()

// remover do começo
//techs.shift()

// pegar somente alguns elementos do 
//console.log(techs.slice(1, 3))//slice =cortar

// remover 1 ou mais items em qualquer posição do arry
//techs.splice(1,3)//nao tira a posição inicial

// encontrar a psoição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)// vai remover o elemento da posição 2 , e tirar quantos 1

console.log(index)