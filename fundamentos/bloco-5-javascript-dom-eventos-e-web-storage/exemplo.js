
let inicio = document.getElementById('elementoOndeVoceEsta');

inicio.parentElement.style.color = "purple";

let filhoDoFilho = inicio.parentElement.firstChild.firstChild;

filhoDoFilho.innerText = "Olha só que cara estranho que chegou!";

let pai = document.getElementById('pai');

let primeiroFilho = pai.firstChild; 

document.getElementById('elementoOndeVoceEsta').parentElement.firstChild;

//acessar o texto atenção?

document.getElementsByClassName('elementoOndeVoceEsta')
