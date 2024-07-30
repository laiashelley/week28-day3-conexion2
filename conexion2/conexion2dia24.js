document.getElementById("buttonID").addEventListener("click", () => {
    const id = document.getElementById("buscadorID").value;
    const urlRM = `https://rickandmortyapi.com/api/character/${id}`;

    mostrarImagen();
    mostrarPie();
    quitarPresentacion();

    fetch(urlRM)
        .then((response) => response.json())
        .then((data) => {

            let nombreRM1 = data.name.toUpperCase();
            document.getElementById("titulo-RM1").innerHTML = nombreRM1;

            document.getElementById("titulo-RM1").style.fontWeight = "bold";

            document.getElementById("titulo-RM1").style.fontSize = "xx-large";

            let imagenRM1 = data.image;
            document.getElementById("imagenRM1").src = imagenRM1;

            let estatusRM1 = data.status.toUpperCase();
            document.getElementById("estatus").innerHTML = "Estatus: " + estatusRM1;

            let especieRM1 = data.species.toUpperCase();
            document.getElementById("especie").innerHTML = "Especie: " + especieRM1;

            let origenRM1 = data.origin.name.toUpperCase();
            document.getElementById("origen").innerHTML = "Origen: " + origenRM1;

        })
    .catch((err) => console.log(err));

});

function mostrarInfo(){
    document.querySelector(".info").style.display = "flex";
}

function mostrarImagen(){
    document.querySelector(".fondoRM1").style.display = "flex";
}

function mostrarPie(){
    document.querySelector(".pie").style.display = "flex";
}

function quitarPresentacion(){
    document.getElementById("presentacion").style.display = "none";
}