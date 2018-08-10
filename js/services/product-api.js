import data from '/js/services/results-api.js';

let products = data.products;

if(!products) {
    data.products = createProducts();
    products = data.products;
}

function createProducts() {
    let data = [{
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
    }, {
        name: 'bubblegum',
        image: '/img/bubblegum.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'chair',
        image: '/img/chair.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'cthulhu',
        image: '/img/cthulhu.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'dog-duck',
        image: '/img/dog-duck.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'dragon',
        image: '/img/dragon.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'pen',
        image: '/img/pen.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'pet-sweep',
        image: '/img/pet-sweep.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'scissors',
        image: '/img/scissors.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'shark',
        image: '/img/shark.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'tauntaun',
        image: '/img/tauntaun.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'unicorn',
        image: '/img/unicorn.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'water-can',
        image: '/img/water-can.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'wine-glass',
        image: '/img/wine-glass.jpg',
        views: 0,
        votes: 0,
    }];

    return data;
}


export default {
    get: () => products,
    getRandomProducts: () => {
        let randomProducts = [];

        while(randomProducts.length < 3) {
            let index = Math.floor(Math.random() * products.length);
            let product = products[index];
            if(randomProducts.includes(product)) continue;
            randomProducts.push(product);
        }

        randomProducts.forEach(product => product.views++);
        
        randomProducts.forEach(product => console.log(product.name, 'views:', product.views));

        return randomProducts;
    },
    handleClick: (productName) => {
        
        let selectedProduct = products.filter(product => product.name === productName);
        let index = products.indexOf(selectedProduct[0]);
        products[index].votes++;

        console.log(products[index].name, 'votes:', products[index].votes);
    }
};