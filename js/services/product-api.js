



let products = [{
    name: 'bag',
    image: '/img/bag.jpg',
    views: 0,
    votes: 0,
}, {
    name: 'banana',
    image: '/img/banana.jpg',
    views: 0,
    votes: 0,
}, {
    name: 'bathroom',
    image: '/img/bathroom.jpg',
    views: 0,
    votes: 0,
}, {
    name: 'boots',
    image: '/img/boots.jpg',
    views: 0,
    votes: 0,
}, {
    name: 'breakfast',
    image: '/img/breakfast.jpg',
    views: 0,
    votes: 0,
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
    handleClick: (productName) => {
        
        let selectedProduct = products.filter(product => product.name === productName);
        let index = products.indexOf(selectedProduct[0]);
        products[index].votes++;

        console.log(products[index].votes);
    }
};