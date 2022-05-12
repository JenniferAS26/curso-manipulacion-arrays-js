const numbers = [1, 30, 39, 29, 10, 13];

// every usando for
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false;
    }
}
console.log('Respuesta con for', rta);

// Con metodo every
const rtaEvery = numbers.every(item => item <= 40);
console.log('Respuesta con every', rtaEvery);

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

//Evaluar que todos lo mienbros del team sean menores que 15 anios
const agesTeam = team.every(edad => edad.age <= 15);
console.log('Todos los mientros son menores de 15', agesTeam);