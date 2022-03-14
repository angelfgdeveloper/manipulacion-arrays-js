const totals = [1, 2, 3, 4];

let sum = 0;
for (let i = 0; i < totals.length; i++) {
  const element = totals[i];
  sum = sum + element;
}

console.log('Total:', sum);

// sum -> Acumulador
// element -> Los valores de cada elemento
// 0 -> Estado inicial
const total = totals.reduce((sum, element) => sum + element, 0);

console.log('Total 2:', total);