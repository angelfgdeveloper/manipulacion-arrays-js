const items = [1, 2, 2, 2, 3, 3, 4, 5, 5];

const resp = items.reduce((obj, item) => {
  // if (!obj[item]) {
  //   obj[item] = 1; 
  // } else {
  //   obj[item] = obj[item] + 1; 
  // }

  (!obj[item])
    ? obj[item] = 1
    : obj[item] = obj[item] + 1;

  return obj;
}, {});

console.log(resp);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(rta1);


const arr = [1, 2, 3, 5, 6, 7, 7, 10, 9, 12, 34];
// { 1-5: 3, 6-8: 2, 9-10:1 }

const result = arr.reduce((obj, item) => {
  if (item > 0 && item < 11) {
    if (item < 6) {
      obj["1-5"] += 1
    } else if (item < 8) {
      obj["6-8"] += 1
    } else {
      obj["9-10"] += 1
    }
  }
  return obj;
}, { '1-5': 0, '6-8': 0, '9-10': 0 });

console.log(result);
