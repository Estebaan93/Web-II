// console.log("Activo");
document.querySelector('#button').addEventListener('click', traerDatos);

function traerDatos(){
  // console.log('function activada');
  const xhttp= new XMLHttpRequest();
  xhttp.open('GET', 'ajax_info.txt', true);
  xhttp.send();

  xhttp.onreadystatechange= function(){
    if(this.readyState==4 && this.status==200){
     // console.log(this.responseText);
      document.querySelector('#respuesta').innerHTML=this.responseText;
    }
  }
  
}
