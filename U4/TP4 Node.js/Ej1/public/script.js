console.log("activo");

async function obtenerInfo(){
  try {
    const response=await fetch('/api/system-info');
    const info=await response.json();

    document.getElementById('infoPc').innerHTML=`
      <strong>Información del Sistema Operativo:</strong><br>
      Sistema: ${info.type}<br>
      Plataforma: ${info.plataforma}<br>
      Arquitectura: ${info.arquitectura}<br>
      Lanzamiento: ${info.release}<br>
      Nombre del Host: ${info.hostname}<br><br>

      <strong>Información del CPU:</strong><br>
      Modelo: ${info.cpuModel}<br>
      Núcleos: ${info.cpuCount}<br><br>

      <strong>Información de la Memoria:</strong><br>
      Total: ${info.totalMemoria} GB<br>
      Disponible: ${info.memoriaLibre} GB    
    `;
   
  }catch(error){
    document.getElementById('infoPc').innerText = 'Error al obtener la información.';
     console.error('Error:', error);
  }
}
obtenerInfo();
