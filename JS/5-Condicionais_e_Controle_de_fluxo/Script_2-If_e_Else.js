// if...else

//Aqui dentro do if , va iter uma condicional

let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature <37.5 && temperature >= 37

if(highTmperature){
  console.log('Febre alta')
}else if(mediumTemperature){ // senão , vai executar o proximo passo
  console.log('Febre moderada')
} else {
  console.log(' Saudável')
}

//DICA : faça em bloco o else if