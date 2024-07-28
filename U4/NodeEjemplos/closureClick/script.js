//FUNCION
function contarClick(){
  let click=0;

  return function contar(){
    click++;
    document.getElementById('contador').innerHTML=`Clicks: ${click}`; 
    console.log(click);
  }
  
}

const button=document.getElementById('button');
const hacerAlgo=contarClick();
button.addEventListener("click",hacerAlgo);
