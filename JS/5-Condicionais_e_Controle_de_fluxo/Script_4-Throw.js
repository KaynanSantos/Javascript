// throw= lançar
//Tentar disparar um erro ,e vai capturar esse erro

function sayMyName(name=''){
    if (name === ''){
      throw 'Nome é obrigatório'
    }
    console.log(name)
}//vai lançar pra fora

//sayMyName()
//console.log('após a função de erro')
//vai acabar com a aplicação inteirea, por isso e importante usar o try/catch



// try ...catch = tentar pegar 
try{//vai capturar o erro
  sayMyName('Kn') // se rodar fora do try , vai dar um erro que nao foi capturado pelo catch 
}catch(e){//tentar capturar o erro
  console.log(e)
}

console.log('após ao try/catch')