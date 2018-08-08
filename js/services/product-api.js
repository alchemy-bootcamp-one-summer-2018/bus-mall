



let products = [{
    name: 'bag',
    image: '/img/bag.jpg'
}, {
    name: 'banana',
    image: '/img/banana.jpg'
}, {
    name: 'bathroom',
    image: '/img/bathroom.jpg'
}, {
    name: 'boots',
    image: '/img/boots.jpg'
}, {
    name: 'breakfast',
    image: '/img/breakfast.jpg'
}];


export default {
    get: function() {
        return products;
    },
    getRandomProducts: () => {
        let randomProducts = [];

        while(randomProducts.length < 3) {
            let index = Math.floor(Math.random() * products.length);
            let product = products[index];
            if(randomProducts.includes(product)) continue;
            randomProducts.push(product);
        }


        return randomProducts;
    },
};