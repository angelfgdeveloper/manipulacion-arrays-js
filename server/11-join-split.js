const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
// for (let i = 0; i < elements.length; i++) {
//   const element = elements[i];
//   rtaFinal = rtaFinal + element + separator;
// }

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  if (i === elements.length - 1) {
    rtaFinal = rtaFinal + element
  } else {
    rtaFinal = rtaFinal + element + separator;
  }
}

// join une los elementos de un arreglo con cualquier caracter que asignemos
const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulación de arrays';
console.log(title.split(' ')); // Lo convierte en un arreglo

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);