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

const mudaLessontwo = (object, key, value) => {
  object[key] = value;
 }
mudaLessontwo(lesson2,'turno','noite')

//console.log(lesson2)

const listarChaves = (objeto) => {
  return  Object.keys(objeto);
}

//console.log(listarChaves(lesson1));

const tamanhoObjeto = (objeto) => {
  return Object.entries(objeto).length;
}

//console.log(tamanhoObjeto(lesson1));

const listarValores = (objeto) => {
  return Object.values(objeto);
}

//console.log(listarValores(lesson3));