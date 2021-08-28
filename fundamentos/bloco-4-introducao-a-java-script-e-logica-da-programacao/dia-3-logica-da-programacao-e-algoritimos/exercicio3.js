//criar a figura de uma triangulo a direita com asteríscos dado um vamos n, onde n é sempre maior que 1

let n = 5;
let linha = "" ;
let trianguloB = "" ;
let triangulo = "";
let asterisco = "*";
let espaco = "a";

for (let i= 0; i < (n-1); i+=1){
  linha +=espaco;
  if(linha > (n-1)){
    console.log(asterisco);
  } else {
    continue;
  }
  
}

// console.log(linha)

// for (let i= 1; i < n; i-=1){
//   triangulo 
// }

// trianguloA += espaco
// trianguloB += asterisco
