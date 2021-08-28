//criar a figura de uma retangulo com asteríscos dado um vamos n, onde n é sempre maior que 1

let n= 5;
let retangulo = "";
let asterisco = "*"

for (let i=0; i < n; i+=1){
    retangulo += asterisco
}

for (let i=0; i < n; i+=1){
    console.log(retangulo);
}
