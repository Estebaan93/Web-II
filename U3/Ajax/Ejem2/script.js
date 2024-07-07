// console.log("Activo");
/*Se comenta porque del lado del html se llama directo a obtenerDatos(dolar) ventajas???*/
/*document.getElementById('dolar').addEventListener('click', function(){
  obtenerDatos('dolar');
 });
*/

document.getElementById('euro').addEventListener('click', function(){
  obtenerDatos('euro');
});

function obtenerDatos(valor){
  //console.log("Diste click");
  let url= `https://mindicador.cl/api/${valor}`; //Segun el tipo le concatenamos el valor

  const api= new XMLHttpRequest(); //Nueva instancia
  api.open('GET', url, true);
  api.send();

  api.onreadystatechange= function(){
    if(this.status== 200 && this.readyState==4){
     let datos=JSON.parse(this.responseText);
     console.log(datos.serie);
     let resultado= document.getElementById('lista');
     resultado.innerHTML='';
     let i=0; //Para mostrar solo hasta 10 objetos, se puede hacer con un for normal??
     
     for(let data of datos.serie){
      resultado.innerHTML+=`<li>${data.fecha.slice(0, 10)} | $ ${data.valor}</li>`;
      i++;
      if(i>10){
        break;
      }
     }
     
    }
  }
    
}
