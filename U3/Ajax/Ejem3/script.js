// console.log("Activo");

function obtenerDatos(){
  let url="catalogo.json";
  console.log("Dentro de la funcion");
  const api= new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();

  api.onreadystatechange= function(){
    if(this.status ==200 && this.readyState==4){
      console.log(this.responseText);
      // let datos= this.responseText;
    }
  }
  
}
