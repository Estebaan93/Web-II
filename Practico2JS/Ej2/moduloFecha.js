// fecha.js
export function obtenerFechaHoraActual() {
    const fechaHora = new Date();
    return fechaHora.toLocaleString(); // Devuelve la fecha y hora en formato local
}
