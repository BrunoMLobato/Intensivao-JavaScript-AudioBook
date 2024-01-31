const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");


let quantidadeCapitulos = 10;
let taTocando = false;
let capitulo = 1;
let capituloAtual = 1;
let Livro = 'Dom-Casmurro';


function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audio.play();
    taTocando = true;
}

function trocarnomeFaixa() {
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual
}

function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audio.pause();
    taTocando = false;
}

function tocarOuPausarFaixa() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function capituloAnterior() {
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "./books/" + Livro + "/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

function proximoCapitulo() {
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audio.src = "./books/" + Livro + "/" + capitulo + ".mp3";;
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

// Função para atualizar o nome do autor
function atualizarNomeAutor(novoNome) {
    const nome_autor = document.getElementById("nome_autor");
    nome_autor.textContent = novoNome;
}

// Primeiro Card
function PrimeiroCard() {
    capitulo = 1
    trocarnomeFaixa();
    quantidadeCapitulos = 10;
    atualizarNomeAutor('Machado de Assis');
    const imagemLivro = document.getElementById('imagemLivro');
    imagemLivro.src = './images/book_dom-casmurro.jpeg';
    Livro = 'Dom-Casmurro';
    audio.src = "./books/" + Livro + "/" + capitulo + ".mp3";;
}

// Segundo Card
function SegundoCard() {
    capitulo = 1
    trocarnomeFaixa();
    quantidadeCapitulos = 10;
    atualizarNomeAutor('José de Alencar');
    const imagemLivro = document.getElementById('imagemLivro');
    imagemLivro.src = './images/book_cinco_minutos.jpg';
    Livro = 'Cinco-Minutos';
    audio.src = "./books/" + Livro + "/" + capitulo + ".mp3";;
}

// Terceiro Card
function TerceiroCard() {
    capitulo = 1
    trocarnomeFaixa();
    quantidadeCapitulos = 10;
    atualizarNomeAutor('Autor 3');
    const imagemLivro = document.getElementById('imagemLivro');
    imagemLivro.src = './images/book_ressureicao.jpg';
    Livro = 'Ressureicao';
    audio.src = "./books/" + Livro + "/" + capitulo + ".mp3";;
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);


