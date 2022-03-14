const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 302323) {
    rta = element;
    break;
  }
}

// FIND DE VUELVE SOLO UN VALOR ESPECIFICO DE LA CONDICION
console.log('for', rta);
const rta2 = numbers.find(item => item === 30)
console.log('find', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);

// findIndex - Devuelve la posicion en que esta ese elemento
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);