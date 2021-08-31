//criar a figura de uma triangulo a direita com asteríscos dado um vamos n, onde n é sempre maior que 1

let triangulo = ""
let n = 5;
let asterisco = "*";
let espaco = " ";
let base = n;

for (let linhai=0; linhai < n; linhai+=1){
  for (let colunai = 0; colunai <= n; colunai+=1){
    if (colunai < base){
      triangulo +=espaco;
    } else{
      triangulo +=asterisco;
    }
  }
    console.log (triangulo);
    triangulo = "";
    base = base - 1  
}