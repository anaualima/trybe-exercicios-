//exercicio 4, criar uma piramide

let triangulo = ""
let n = 5;
let asterisco = "*";
let espaco = " ";
let base = n;
let meio = n+1/2;
let controleE = meio;
let controleD = meio;

for (let linhai=0; linhai <= meio; linhai+=1){
  for (let colunai = 0; colunai <= n; colunai+=1){
    if (colunai > controleE && colunai < controleD){
      triangulo +=asterisco;
    } else{
      triangulo +=espaco;
    }
  }
    console.log (triangulo);
    triangulo = "";
    controleD+=1;
    controleE-=1; 
}