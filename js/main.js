import { buscarPersonagens } from "./api.js";
import { renderizarPersonagens, mostrarMensagem } from "./util.js";


const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

async function carregarPersonagem(nome = '') {
    try {
        mostrarMensagem('Carregando personagens...');
        const data = await buscarPersonagens(nome);
        renderizarPersonagens(data.results);
    } catch (error) {
        mostrarMensagem('Nenhum personagem encontrado.');
    }
};

form.addEventListener('submit', async function(event) {

    event.preventDefault();

    const nomeDigitado = input.value;

    await carregarPersonagem(nomeDigitado);

});

carregarPersonagem();

async function iniciarApp() {
    const personagens = await buscarPersonagens();
    renderizarPersonagens(personagens.results);
    console.log(personagens)
}

iniciarApp();