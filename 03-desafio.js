const users = [
  {
    name: "Francisco",
    age: 25,
    series: ["TWD", "AOT"],
  },
  {
    name: "Pepe",
    age: 32,
    series: ["JJK", "DBZ"],
  },
];


users.forEach((user) => {
    user.age++, user.series.push('Kimetsu')
});

console.log(users);

