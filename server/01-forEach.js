const letters = ['a', 'b', 'c'];
letters.forEach(item => console.log(`forEach ${item}`));

// vs
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(`for ${element}`);
}