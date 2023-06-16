//function hoisting
 sayMyName()

 function sayMyName(){
  console.log('knn')
 }

 //É como se o JS pega o function e joga ela la em cima de 
 //sayMyName

// const sayMyname =function(){
 //   console.log('Knn')
// }

 //vai dar errodizendo que o sayMyName nao consegue acessar depois da inicialização

//Diferente do var

//sayMyName()

//var sayMyName = function(){
//  console.log('Kn')
//}

//var vai sofrer uma elevaçao , jogando emcima do sayMyname

// Quando faz uma função de expressao ela nao sofre elevação