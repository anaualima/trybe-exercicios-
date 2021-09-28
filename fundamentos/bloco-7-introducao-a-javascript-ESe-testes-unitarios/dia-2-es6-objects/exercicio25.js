const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const allLessons = {};

Object.assign(allLessons,{lesson1, lesson2, lesson3});
//console.log(allLessons);

function somaDeEstudantes(allLessons) {
    let soma = 0;
    for (let lessons in allLessons){
    soma += allLessons[lessons].numeroEstudantes
   }
   return soma;
}
//console.log(somaDeEstudantes(allLessons));

function chaveArray(objeto,num) {
    return chaves = Object.values(objeto)[num];
}

//console.log(chaveArray(lesson1, 0));

function verify (objeto,chave,valor) {
//     let par = Object.entries(objeto);
//     for (let lessons in par){
//       if (par[lessons][0] == chave && par[lessons][1] == valor){
//         return true
//     }
//  }
//     return false
return objeto[chave] === valor
//(objeto[chave] === valor)
}
console.log(verify(lesson3, 'turno', 'noite'));

