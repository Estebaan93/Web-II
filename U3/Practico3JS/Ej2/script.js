console.log("Activo");

const apiKey='1NsAzeaMuuqBU0Q1Qh6Yuw==kJqeAGhE8Ajr8Hn6';

function getCarInfo(){
  const make=document.getElementById('make').value;
  const model=document.getElementById('model').value;
  const combustible=document.getElementById('combustible').value;
  
  fetch(`https://api.api-ninjas.com/v1/cars?limit=3&make=${make}&model=${model}&fuel_type=${combustible}`,{
    method:'GET',
    headers: {
      'X-Api-Key': apiKey
    }
  })
  .then(response=>response.json())
  .then(data=>{
    const listaAutos=document.getElementById('car-list');
    listaAutos.innerHTML='';

    if(data.length>0){
      data.forEach(car=>{
        console.log(car);
        const listaItems=document.createElement('li');
        listaItems.innerHTML=`
          <h3>Auto: ${car.make}</h3>
          <h4>Modelo: ${car.model}</h4>
          <h5>Año: ${car.year}</h5>
          <p>Clase: ${car.class}</p>
          <p>City: ${car.city_mpg}</p>
          <p>Combinacion de nafta: ${car.combination_mpg}</p>
          <p>Tipo de combustible: ${car.fuel_type}</p>
        `;
        listaAutos.appendChild(listaItems);
        
      })
    }else{
      listaAutos.innerHTML='<li>No hay autos.</li>';
    }
    
  })
  .catch(error=> console.error('Error: ',error));
  
}
