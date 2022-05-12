const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1); // tenemos que tener la ubicacion del elemento y cuantos productos deseo eliminar a partir de esa ubicacion
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "tasty"
    }
}

const productIndexUpd = productsV2.findIndex(item => item.id === update.id);
//productsV2[productIndexUpd] = update.changes; // reescribio todo el objeto para que no pase se hace la forma de abajo
productsV2[productIndexUpd] = {
    ...productsV2[productIndexUpd],
    ...update.changes,
}
console.log(productsV2);