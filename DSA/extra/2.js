const result = {};

const array = [
  {
    name: "parth",
    age: 23,
  },
  {
    name: "parth1",
    age: 115,
  },
  {
    name: "parth11",
    age: 119,
  },
  {
    name: "parth45",
    age: 121,
  },
  {
    name: "parth4511",
    age: 120,
  },
];
array.forEach((item) => {
  const start = parseInt(item.age / 10) * 10;
  const end = parseInt(item.age / 10) * 10 + 9;
  result[`${start}-${end}`] = [
    ...(Object.keys(result).includes(`${start}-${end}`)
      ? result[`${start}-${end}`]
      : []),
    item,
  ];
});
