//exercicio 1 de objeto


//exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log ("Bem vinda! "+info.personagem);

// exercicio 2

  info ['recorrente'] = 'sim'

  for (let key in info){
      console.log(info)
  }
//exercicio 3

  for (let key in info){
      console.log(key)
  }

//exericio 4

  for (let key in info){
      console.log(info[key])
  }

//exercicio 5

let tio = {

    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell' s Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
}

for (let key in info){
if (key === "recorrente" && tio.recorrente === 'sim' && info.recorrente === 'sim'){
    console.log ('Ambos são recorrentes')
}else{
    console.log(info[key] + tio[key])
}
}

