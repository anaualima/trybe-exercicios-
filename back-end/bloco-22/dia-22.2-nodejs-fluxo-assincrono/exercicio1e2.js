function calculo(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error("Informe apenas números"));
    
    const resultado = (a + b) * c;
    if (resultado < 50) {
      reject(new Error("Valor muito baixo"))
    }

    resolve(resultado);
  });

  return promise;
}

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

calculo(a, b, c)
.then((result) => console.log(result))
.catch(err => console.log("Erro: %s", err.message))