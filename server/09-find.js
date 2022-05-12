const numbers = [1, 30, 39, 29, 10, 13];

// find usando for
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 50) {
        rta = element;
        break;
    }
}
console.log('Respuesta con for', rta);

// Metodo find
const rtaFind = numbers.find(item => item === 50);
console.log('Respuesta con find', rtaFind);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const rtaProducts = products.find(item => item.id === '🌭');
console.log('El producto es', rtaProducts);

const rtaProductsIndex = products.findIndex(item => item.id === '🌭');
console.log('La posicion es', rtaProductsIndex);