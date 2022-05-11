const words = ['spray', 'limit', 'elite', 'exuberant'];

// Filtrar con for
const newArrayFor = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newArrayFor.push(element);
    }
}
console.log('Array Original', words);
console.log('New Array con For', newArrayFor);

console.log('----------------------------------');
// Filtramos con Filter
const arrayFilter = words.filter(item => item.length >= 6);
console.log('Array Original', words);
console.log('Array con Filter', arrayFilter);

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 1250,
        delivered: false,
    },
];

// const ordersDel = orders.filter(item => item.delivered);
// console.log('Ordenes entregadas', ordersDel);

const ordersDel = orders.filter(item => item.delivered && item.total >= 100);
console.log('Ordenes entregadas', ordersDel);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Val'));