const user = [
    {firstName:"Sajal",lastName:"saini",age:"260"},
    {firstName:"Bhanu",lastName:"Chouhan",age:"26"},
    {firstName:"Sajal",lastName:"saini",age:"260"},
    {firstName:"Shraddha",lastName:"saini",age:"260"},
];
const output = user.filter((x) => x.age < 30)
.map((x) => x.firstName);
console.log(output);