let destinos = [
    {
        id: 1,
        nome: "Paris, França",
        imagem: "paris.jpg",
        descricao: "Explore a Cidade Luz, visite a Torre Eiffel e caminhe pelas margens do Rio Sena."
    },
    {
        id: 2,
        nome: "Tóquio, Japão",
        imagem: "tokyo.jpg",
        descricao: "Descubra a modernidade e tradição em uma das cidades mais vibrantes do mundo."
    },
    {
        id: 3,
        nome: "Nova York, EUA",
        imagem: "park.jpg",
        descricao: "Descubra a cidade que nunca dorme, explore Manhattan, Central Park e a Estátua da Liberdade."
    }
];

const destinoList = document.getElementById('destino-list');
const formDestino = document.getElementById('formDestino');
const formTitulo = document.getElementById('formTitulo');
const nomeInput = document.getElementById('nome');
const imagemInput = document.getElementById('imagem');
const descricaoInput = document.getElementById('descricao');
const cancelarButton = document.getElementById('cancelar');
const novoDestinoBtn = document.getElementById('novoDestinoBtn');

let modoEdicao = false;
let destinoEditando = null;

function inicializarPagina() {
    renderizarDestinos();
    formDestino.addEventListener('submit', salvarDestino);
    cancelarButton.addEventListener('click', limparFormulario);
    novoDestinoBtn.addEventListener('click', prepararNovoDestino);
}

function renderizarDestinos() {
    destinoList.innerHTML = '';

    destinos.forEach(destino => {
        const destinoEl = criarElementoDestino(destino);
        destinoList.appendChild(destinoEl);
    });
}

function criarElementoDestino(destino) {
    const destinoEl = document.createElement('div');
    destinoEl.classList.add('destino');
    destinoEl.dataset.id = destino.id;

    const imgEl = document.createElement('img');
    imgEl.src = destino.imagem;
    imgEl.alt = destino.nome;
    destinoEl.appendChild(imgEl);

    const h2El = document.createElement('h2');
    h2El.textContent = destino.nome;
    destinoEl.appendChild(h2El);

    const pEl = document.createElement('p');
    pEl.textContent = destino.descricao;
    destinoEl.appendChild(pEl);

    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.classList.add('btn-editar');
    btnEditar.addEventListener('click', () => editarDestino(destino));
    destinoEl.appendChild(btnEditar);

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('btn-excluir');
    btnExcluir.addEventListener('click', () => excluirDestino(destino));
    destinoEl.appendChild(btnExcluir);

    return destinoEl;
}

function prepararNovoDestino() {
    modoEdicao = false;
    destinoEditando = null;
    formTitulo.textContent = 'Adicionar Destino';
    limparFormulario();
    formDestino.style.display = 'block';
}

function salvarDestino(evento) {
    evento.preventDefault();

    const nome = nomeInput.value.trim();
    const imagem = imagemInput.value.trim();
    const descricao = descricaoInput.value.trim();

    if (nome === '' || imagem === '' || descricao === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (modoEdicao) {
        destinos = destinos.map(destino => {
            if (destino.id === destinoEditando.id) {
                return { ...destino, nome, imagem, descricao };
            }
            return destino;
        });

        modoEdicao = false;
        destinoEditando = null;
    } else {
        const novoDestino = {
            id: gerarId(),
            nome,
            imagem,
            descricao
        };

        destinos.push(novoDestino);
    }

    limparFormulario();
    renderizarDestinos();
}

function gerarId() {
    return new Date().getTime();
}

function editarDestino(destino) {
    modoEdicao = true;
    destinoEditando = destino;

    nomeInput.value = destino.nome;
    imagemInput.value = destino.imagem;
    descricaoInput.value = destino.descricao;

    formTitulo.textContent = 'Editar Destino';
    formDestino.style.display = 'block';
}

function excluirDestino(destino) {
    destinos = destinos.filter(d => d.id !== destino.id);
    renderizarDestinos();
}

function limparFormulario() {
    modoEdicao = false;
    destinoEditando = null;
    nomeInput.value = '';
    imagemInput.value = '';
    descricaoInput.value = '';
    formDestino.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', inicializarPagina);
