let datos = [];

function agregarDatos() {
    const formulario = document.getElementById('formulario');
    if (formulario.checkValidity()) {
        const anio = parseInt(document.getElementById('anio').value);
        const inflacion = parseFloat(document.getElementById('inflacion').value);
        const suceso = document.getElementById('suceso').value;
        datos.push({ anio, inflacion, suceso });
        formulario.reset();
        for (let i in datos) {
            console.log(`${i}: ${datos[i].anio}`);
            console.log(`${i}: ${datos[i].inflacion}`);
            console.log(`${i}: ${datos[i].suceso}`);
        }
    } else {
        alert('Por favor, complete el formulario correctamente.');
    }
}
function imprimirDatosOrdenados(tipoOrden) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores

    let datosOrdenados = [];
    switch (tipoOrden) {
        case 'anio':
            datosOrdenados = datos.slice().sort((a, b) => a.anio - b.anio);
            console.log(`dato ordenado:`);
            for (let i in datosOrdenados) {
                console.log(`${i}: ${datosOrdenados[i].anio}`);
            }
            break;
        case 'inflacion':
            datosOrdenados = datos.slice().sort((a, b) => a.inflacion - b.inflacion);
            console.log(`dato ordenado:`);
            for (let i in datosOrdenados) {
                console.log(`${i}: ${datosOrdenados[i].inflacion}`);
            }break;
        case 'suceso':
            datosOrdenados = datos.slice().sort((a, b) => a.suceso.localeCompare(b.suceso));
            console.log(`dato ordenado:`);
            for (let i in datosOrdenados) {
                console.log(`${i}: ${datosOrdenados[i].suceso}`);
            }
            break;
        default:
            return;
    }
    datosOrdenados.forEach(dato => {
        resultadosDiv.innerHTML += `<p>${dato.anio}, ${dato.inflacion.toFixed(2)}, ${dato.suceso}</p>`;
    });
}