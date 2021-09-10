//criar um botao com o nome fundo da tela
function criaBotaoFundo(palavra){
    let container = document.querySelector('div');
    let botaoFundo = document.createElement('button');
    botaoFundo.innerText = palavra;
    container.appendChild(botaoFundo);
}
criaBotaoFundo("cor de fundo");

//criar botao cor de texto 
function criaBotaoTexto(palavra){
    let container = document.querySelector('div');
    let botaoTexto = document.createElement('button');
    botaoTexto.innerText = palavra;
    container.appendChild(botaoTexto);
}
criaBotaoTexto("cor de texto");

// criar botão tamanho da fonte
function criaBotaoFote(palavra){
    let container = document.querySelector('div');
    let botaoTamanhoFonte = document.createElement('button');
    botaoTamanhoFonte.innerText = palavra;
    container.appendChild(botaoTamanhoFonte);
}
criaBotaoFote("Tamanho da fonte");

//criar botao espaçamento
function criaBotaoFote(palavra){
    let container = document.querySelector('div');
    let botaoEspacamento = document.createElement('button');
    botaoEspacamento.innerText = palavra;
    container.appendChild(botaoEspacamento);
}
criaBotaoFote("espaçamento");

//criar botao fonte 
function criaBotaoFote(palavra){
    let container = document.querySelector('div');
    let botaoFonte = document.createElement('button');
    botaoFonte.innerText = palavra;
    container.appendChild(botaoFonte);
}
criaBotaoFote("fonte");