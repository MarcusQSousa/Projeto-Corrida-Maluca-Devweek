

const personagensP1 = document.querySelectorAll(".personagem");

personagensP1.forEach((personagemP1) => {
  personagemP1.addEventListener("click", () => {

    const p1ValueSelected = personagemP1.attributes.value.value;
    console.log(p1ValueSelected)

    // if(idSelecionado === 'equipeVigarista') return;

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagemP1.classList.add("selecionado");

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${p1ValueSelected}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagemP1.getAttribute('data-name');
    
    nomeJogador1.innerHTML = nomeSelecionado;
  });
});


const personagensP2 = document.querySelectorAll(".personagemB");

personagensP2.forEach((personagemP2) => {
  personagemP2.addEventListener("click", () => {

    const p2ValueSelected = personagemP2.attributes.value.value;
    console.log(p2ValueSelected)

    // if(idSelecionado === 'equipeVigarista') return;

    const personagemSelecionado = document.querySelector(".selecionadoB");
    personagemSelecionado.classList.remove("selecionadoB");

    personagemP2.classList.add("selecionadoB");

    const imagemJogador2 = document.getElementById('personagem-jogador-2');
    imagemJogador2.src = `./src/imagens/${p2ValueSelected}.png`;

    const nomeJogador2 = document.getElementById('nome-jogador-2');
    const nomeSelecionado = personagemP2.getAttribute('data-name');
    
    nomeJogador2.innerHTML = nomeSelecionado;
  });
});
