const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
console.log(numbers);

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a, b) => a.localeCompare(b)); // navegadores no modernos
console.log(words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
orders.sort((a, b) => b.total - a.total); // Mayor a menor
// orders.sort((a, b) => a.total - b.total); // Menor a mayor
console.log(orders);


const orders2 = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date (2021, 3, 8, 4),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date (2021, 9, 12, 3),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date (2021, 8, 2, 2),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 9, 30),
  },
];

orders2.sort((a,b) => a.date - b.date);
console.log(orders2);