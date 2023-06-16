// callback function = chame de volta

function sayMyName(name){
  console.log(name)
}

sayMyName(
  () =>{
    console.log('estou em uma callback')
  }
)//chama um valor de volta , deentro dessa função