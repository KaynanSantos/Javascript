//for...in
//vai criar um looping emcima de um objeto
let person ={
  name:'Knn',
  age:30,
  weight: 79.8
}

for(let property in person){
    console.log(property)//vai mostra tudo dentro de person
    console.log(person[property])//vai pegar as definções das variaveis declarada em person  ,knn 30 78.8
}