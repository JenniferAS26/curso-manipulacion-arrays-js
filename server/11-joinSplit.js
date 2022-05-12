const elements = ["Fire", "Air", "Water"];

// join usando for
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    // Cada ve que hagamos ua iteracion vamos a ir agregando a rtaFinal + el separador
    rtaFinal = rtaFinal + element + separator;
    // saber si estoy en el ultimo elemento para no colocar el separador al final
}
console.log('Solucion con for', rtaFinal);

// metodo join
const rtaFinalJoin = elements.join('--');
console.log('Solucion con join', rtaFinalJoin);

const title = 'Curso de Manipulacion de Arrays';
// const titleArray = title.split(' ');
const urlArray = title.split(' ').join('-').toLocaleLowerCase();
// const titleFinal = titleArray.join('/');
console.log(urlArray);
// console.log(titleFinal);
