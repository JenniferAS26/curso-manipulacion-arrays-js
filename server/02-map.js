// Generar una transformacion

// const letters = ['a', 'b', 'c', 'd'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(`${element}++`);
}
console.log(`Original ${letters}`);
console.log(`New ${newArray}`);

// map para transformaciones
const letters = ['a', 'b', 'c', 'd'];
const newArrayMap = letters.map(item => `${item}++`);
console.log(`Original ${letters}`);
console.log(`New ${newArrayMap}`);