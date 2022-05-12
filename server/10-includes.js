const pets = ['cat', 'dog', 'bat'];

// includes usando for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('Usando for', includeInArray);

// metodo includes
const rtaIncludes = pets.includes('dog');
console.log('Usando includes', rtaIncludes);