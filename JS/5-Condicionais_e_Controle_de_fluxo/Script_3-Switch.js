//  Switch

/*
switch(expression){
  case 'a':
      // codigo
      console.log('a')
      break
  case 'b' :
    //codigo para expression b
    console.log('b')
    break
  default:  
    //se nao comprir nenhum dos casos acima ,entao para a expression
    console.log('default')
    break
    
}*/

function calculate(number1, operator ,number2){
  let result =0;//começar o resultado como zero pra nao dar indefinido

  switch(operator){
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')

  }
  return result
}

console.log(calculate (6, '*',8))