function rnd255() {
  return Math.floor(Math.random() * 256);
}

function stringRGB() {
  const stringCor = `rgb(${rnd255()}, ${rnd255()}, ${rnd255()})`;
  return stringCor;
}

const codigoRGB = document.getElementById('rgb-color');
codigoRGB.innerText = `(${rnd255()}, ${rnd255()}, ${rnd255()})`;

const bolas = document.getElementsByClassName('ball');

function geraCorBolas() {
  for (let index = 0; index < bolas.length; index += 1) {
    const bolaAtual = bolas[index];
    const estiloAtual = bolaAtual.style;
    estiloAtual.setProperty('background-color', stringRGB());
  }
}

geraCorBolas();

function determinaIndexBola() {
  const indexRND = Math.floor(Math.random() * 6);
  return bolas[indexRND];
}

const codigoRGBAtual = codigoRGB.innerText;
const stringCodigoRGBAtual = `rgb${codigoRGBAtual}`;

function pintaBolaCerta(codigo) {
  const bolaCerta = determinaIndexBola();
  bolaCerta.style.setProperty('background-color', codigo);
  bolaCerta.classList.add('certa');
}

pintaBolaCerta(stringCodigoRGBAtual);
const paragrafoResultado = document.getElementById('answer');

function selecionaBola(evento) {
  if (evento.target.classList.contains('certa')) {
    paragrafoResultado.innerText = 'Acertou!';
  } else {
    paragrafoResultado.innerText = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < bolas.length; index += 1) {
  bolas[index].addEventListener('click', selecionaBola);
}
