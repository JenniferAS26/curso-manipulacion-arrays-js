const matriz = [
    [1, 2, 3], // 0
    [4, 5, 6, [8, 6, [1, 2]]], // 1
    [7, 8, 9]  // 2
];

// usando for
const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

console.log('Usando for', newArray);

// metodo flat
const rtaFlat = matriz.flat(3); /**Debemos decirle hasta que nivel queremos aplanar */
console.log('Usando flat', rtaFlat);