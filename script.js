// Constantes //
const bolas = document.getElementsByClassName('ball');
const codigoRGB = document.getElementById('rgb-color');
const paragrafoResultado = document.getElementById('answer');
const botaoReset = document.getElementById('reset-game');
const placar = document.getElementById('score');

// Funções gerais //

function rnd255() {
  return Math.floor(Math.random() * 256);
}

function stringRGB() {
  const stringCor = `rgb(${rnd255()}, ${rnd255()}, ${rnd255()})`;
  return stringCor;
}

function determinaIndexBola() {
  const indexRND = Math.floor(Math.random() * 6);
  return bolas[indexRND];
}

function determinaRGBTexto() {
  codigoRGB.innerText = `(${rnd255()}, ${rnd255()}, ${rnd255()})`;
}

function geraCorBolas() {
  for (let index = 0; index < bolas.length; index += 1) {
    const bolaAtual = bolas[index];
    const estiloAtual = bolaAtual.style;
    estiloAtual.setProperty('background-color', stringRGB());
  }
}

function pintaBolaCerta(codigo) {
  const bolaCerta = determinaIndexBola();
  bolaCerta.style.setProperty('background-color', codigo);
  bolaCerta.classList.add('certa');
}

function atualizaPlacar() {
  const placarAtual = parseInt(placar.innerText, 10);
  const novoPlacar = placarAtual + 3;
  placar.innerText = novoPlacar;
}

function selecionaBola(evento) {
  if (evento.target.classList.contains('certa')) {
    paragrafoResultado.innerText = 'Acertou!';
    atualizaPlacar();
  } else {
    paragrafoResultado.innerText = 'Errou! Tente novamente!';
  }
}

function retornaParagrafo() {
  paragrafoResultado.innerText = 'Escolha uma cor';
}

for (let index = 0; index < bolas.length; index += 1) {
  bolas[index].addEventListener('click', selecionaBola);
}

function carregamentoInicial() {
  determinaRGBTexto();
  const codigoRGBAtual = codigoRGB.innerText;
  const stringCodigoRGBAtual = `rgb${codigoRGBAtual}`;
  geraCorBolas();
  pintaBolaCerta(stringCodigoRGBAtual);
  retornaParagrafo();
}

botaoReset.addEventListener('click', carregamentoInicial);

window.onload = () => {
  carregamentoInicial();
};
