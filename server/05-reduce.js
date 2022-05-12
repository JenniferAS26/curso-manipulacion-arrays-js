const totals = [1, 2, 3, 4];

// Reduce con for
let totalSum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    totalSum = totalSum + element;
}
console.log('Con for', totalSum);

// Metodo Reduce
const sumTotalReduce = totals.reduce((totalSum, item) => totalSum + item, 0)
console.log('Con reduce', sumTotalReduce);