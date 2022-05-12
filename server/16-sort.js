const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); // sin parametro lo ordena por orden alfabetico
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
//numbers.sort(); // sin parametro lo ordena por orden codico ascci
numbers.sort((a,b) => a - b); // enviamos una arrow function y enviamos dos elementos porque el tiene que comparar quien es mas grande que el otro
//numbers.sort((a,b) => b - a); // mayor a menor
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort(); // Version actual de node
//words.sort((a,b) => a.localeCompare(b)); // procesadores un poco mas antiguis
console.log(words);
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b) => b.total - a.total);
console.log(orders);