// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById("amigo");
const ListaAmigos = [];
const ullistaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado")
function agregarAmigo() {
    ListaAmigos.push(inputAmigo.value);
    ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

};

function sortearAmigo(){
    const random = Math.floor (Math.random() * ListaAmigos.length);
    const amigoSecreto = ListaAmigos [random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
};