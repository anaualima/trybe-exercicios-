
document.getElementsByClassName("main-content") 

//Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function paragrafo() {
   let mudaParagrafo = document.getElementsByTagName("p")[1];
   mudaParagrafo.innerText = "Conseguir ser uma execlente profissional, realizar grandes desafios e me satisfazer ao perceber que consigo melhorar a vida das pessoas através da programação.";
}

paragrafo();

//Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function corTrybe() {
  let mudaCorDaCaixa = document.getElementsByClassName("main-content")[0];
  mudaCorDaCaixa.style.background = "rgb(76,164,109)";
}

corTrybe();

//Crie uma função que mude a cor do quadrado vermelho para branco.

function corBranco() {
    let mudaCorCentro = document.getElementsByClassName("center-content")[0];
    mudaCorCentro.style.background ="white";
}

corBranco();

//Crie uma função que corrija o texto da tag <h1>.

function corrigeTitulo() {
    let mudaTitulo = document.getElementsByTagName("h1")[0];
    mudaTitulo.innerText = "Exercicio/5.1 Javascript";
}
corrigeTitulo();

//Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function tornarMaiusculo() {
    let maiusculo = document.getElementsByTagName('p')[0];
    maiusculo.innerHTML = maiusculo.innerHTML.toUpperCase();  
}

tornarMaiusculo();

//Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function exibirParagrafos() {
    let todosOsParagrafos = document.getElementsByTagName('p');
    for (let i =0; i < todosOsParagrafos.length; i+=1){
        console.log(todosOsParagrafos[i].innerText);
    }
}

exibirParagrafos();