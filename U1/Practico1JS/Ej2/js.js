function mostrarFechaHora() {
  const ahora = new Date();

  const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);

  const hora = ahora.getHours();
  const minuto = ahora.getMinutes();
  const segundo = ahora.getSeconds();
  const pmam = hora >= 12 ? 'PM' : 'AM';
  const hora12 = hora % 12 || 12; // Convertir la hora de 24 horas a 12 horas

  const mensaje = `Hoy es ${fechaFormateada}.<br>La hora actual es ${hora12}:${minuto}:${segundo} ${pmam}.`;

  document.getElementById('fecha').innerHTML = mensaje;
}

// Llamar a la función cada segundo para actualizar la hora
setInterval(mostrarFechaHora, 1000);

// Mostrar la fecha y hora actual al cargar la página
mostrarFechaHora();
