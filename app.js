let amigos = []; // Almacena lista de amigos

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Ingresa mínimo un amigo para sortear.');
    } else {
        let indice = Math.floor(Math.random() * amigos.length);

        document.getElementById("listaAmigos").innerHTML = "";

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indice]}`
    }
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre == "") {
        alert('Por favor, inserte un nombre.')
    } else {
        amigos.push(nombre); // Inserta amigo en la lista
        actualizarAmigos();
        limpiarEntrada();
    }
}

function actualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista existente

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function limpiarEntrada() {
    document.querySelector('#amigo').value = "";
}