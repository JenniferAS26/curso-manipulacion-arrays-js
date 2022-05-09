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
];
// console.log('Original', orders);
// const ans = orders.map(item => item.total); // Transforma de un array de objetos a un array de nuemeros
// console.log('Nuevo array', ans);

// const ans2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });
// console.log('Nuevo array con impuesto', ans2);
// console.log('Original', orders);

const ans3 = orders.map((item) => {
    return {
        ...item,
        tax: .19
    };
});
console.log('ans3', ans3);
console.log('Original', orders);