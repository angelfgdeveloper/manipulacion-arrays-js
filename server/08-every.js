// TODOS LOS ELEMENTOS TIENEN QUE CUMPLIR CON LA CONDICION

const numbers = [1, 30, 39, 29, 10, 13];

let rta = true;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element >= 40) {
    rta = false
  }
}

console.log('for', rta);
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

// Solo aceptamos que todo el equipo tenga menores de 15 años
const isAccept = team
  .map((team) => team.age)
  .every((team) => team <= 15);

console.log({ isAccept });
