// 1. Declare uma variável de nome weight
   // let weight

// 2. Que tipo de dado é a variável acima?
    //console.log(typeof weight)

/*
  3. Declare uma variável e atribua  valores para cada um dos dados:
    * name:String
    * age: Number(interger)
    *stars: Number (float)
    * isSubscribed: Boolean
    
*/
/*
let name:'kn'
let age: 26
let stars: 4.7
let isSubscribed: true
*/

/*
  4. A variável student abaixo é de que tipo de dados?
    object
  
  4.1 Atribua a ela as mesmas propriedaes e valroes do exercício 3.
  
  4.2 mostre no console a seguitem mensagem:
    <name> de idade <age> pesa <weight> kg

    Atenção , substitua <anme> <age. e <weight> pelos
    valores de cada propriedade do objeto 
    
*/

let student = {
  name:'kn',
  age: 26,
  weight: 74.7,
  isSubscribed: true,
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)


/*
    5. Declare uma variável do tipo Array, de nome
    studednts e atribua a ela nenhuma valor , ou seja,
    somente o Arry vazio


 */

    let students=[]

/*
    6. Reatribua valor para a variável acima, colocando dentro 
    dela o objeto student da questão 4. (não
      copiar e colocar o objeto , mas usar o objeto criado e 
      inserir ele no Array)
*/   

students = [
  students
]
console.log(students)

/**
    7. coloque no console o valor da ppsiçao zero do 
    Array acima
 
 */
console.log(students[0])


/*
    8. Crie um novo student e coloque na posição 1 do 
    Array students
 */

const john={
  name:"john",
  age: 24,
  weight: 94.7,
  isSubscribed: false,

}

students = [
  student,
  john
]

//ou tambem

students[1] = john
console.log(students)
  
/*
    9. Sem rodar o código responda qual é a resposta do
    código abaixo e por que? Após sua esposta , rode o 
    código e veja se você acertou.

    console.log(a)
    var a = 1
    undefined
*/

