// console.log("Activo");

function obtenerDatos(){
  let api="https://hp-api.onrender.com/api/characters";
  // console.log("Dentro de la func");
  fetch(api)
    .then(response=>{
      if(!response.ok){
        throw new Error(`Error al obtener los datos de ${api}`);
      }
      return response.json();
    })
    .then(data=>{
      console.log(data);
      manejarDatos(data);  //Llamar a la funcion
    })
    .catch(error=>{
      console.log('Error: ',error);
    });
  
}

function manejarDatos(data){
  const filterSpecies=document.getElementById('species').value;
  const filterGender=document.getElementById('gender').value;
  const filterData= data.filter(personaje=>{
    return (filterSpecies==="" || personaje.species===filterSpecies)&& (filterGender==="" || personaje.gender===filterGender);
  });
  renderizarCards(filterData);
  
}


//Funcion para manejar datos
function renderizarCards(data){
  let i=0;
  const divCards=document.getElementById('divCards');
  divCards.innerHTML=''; //Limpiar tarjetas anteriores
  data.forEach(elemento=>{   
    if(i>32){
      return; //Cortamos al forEach devolviendo nada
    }

    const cards=document.createElement('div');
    cards.classList.add('cards'); //Añadimos a clase cards
    
    if(!elemento.alive){
      cards.classList.add('muerto');
    }
    
    const img=document.createElement('img');
    const name=document.createElement('h5');
    const estado=document.createElement('h5');
    const species=document.createElement('p');
    const casa=document.createElement('p');


    //Asignar por defecto una imagen si esta vacia   
    img.src=elemento.image || '../src/HarryPotter.jfif';
    img.alt=elemento.name;
    name.innerHTML=`Nombre: ${elemento.name}`;
    estado.innerHTML=`Estado: ${elemento.alive ? 'Vive':'Muerto'}`;
    species.innerHTML=`Especie: ${elemento.species}`;  
    casa.innerHTML=`Casa: ${elemento.house}`;  
    
    cards.appendChild(img);
    cards.appendChild(name);
    cards.appendChild(estado);
    cards.appendChild(species);
    cards.appendChild(casa);
    
    divCards.appendChild(cards);  
     
    // console.log(i);    
       
    i++;
  });
  
}


//Inicializar Materialize CSS al cargar la pagina
document.addEventListener('DOMContentLoaded', function(){
  var elems= document.querySelectorAll('select');
  M.FormSelect.init(elems);
})
