function init() {
    let contador = 0;

    function conteo() {
        contador++;
        document.querySelector(".contador").textContent = contador;
    }

    document.querySelector("button").addEventListener("click", conteo);
}

document.addEventListener("DOMContentLoaded", init);

init();