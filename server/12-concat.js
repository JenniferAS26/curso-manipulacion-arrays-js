const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// usando for
const newArray = [...elements]; /* Split Operation */
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('Con for', newArray);

// metodo concat
const newArrayConcat = elements.concat(othersElements);
const otherConcat = [...elements, ...othersElements]; /* Solo lo hace correctamente si es un array */
const otherConcatCaracteres = [...elements, 'random']; /* Solo lo hace correctamente si es un array */
const otherConcatCaracteresSO = [...elements, ...'random']; /* Solo lo hace correctamente si es un array */
console.log('Con concat', newArrayConcat);
console.log('Con Split Operation', otherConcat);
console.log('Con Split Operation', otherConcatCaracteres);
console.log('Con Split Operation', otherConcatCaracteresSO);

/*elements.push(othersElements); /* Concatena pero mete el array dentro del otro */
elements.push(...othersElements);
console.log('elements', elements);
