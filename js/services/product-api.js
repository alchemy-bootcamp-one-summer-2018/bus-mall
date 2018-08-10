import data from '/js/services/results-api.js';

let products = data.products;

if(!products) {
    data.products = createProducts();
    products = data.products;
}

function createProducts() {
    let data = [{
        name: 'Bag',
        image: '/assets/img/bag.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Banana',
        image: '/assets/img/banana.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Bathroom',
        image: '/assets/img/bathroom.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Boots',
        image: '/assets/img/boots.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Breakfast',
        image: '/assets/img/breakfast.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Bubblegum',
        image: '/assets/img/bubblegum.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Chair',
        image: '/assets/img/chair.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Cthulhu',
        image: '/assets/img/cthulhu.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Doggie Duck',
        image: '/assets/img/dog-duck.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Dragon',
        image: '/assets/img/dragon.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Pen',
        image: '/assets/img/pen.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Pet Sweep',
        image: '/assets/img/pet-sweep.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Scissors',
        image: '/assets/img/scissors.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Shark',
        image: '/assets/img/shark.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Tauntaun',
        image: '/assets/img/tauntaun.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Unicorn',
        image: '/assets/img/unicorn.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Water Can',
        image: '/assets/img/water-can.jpg',
        views: 0,
        votes: 0,
    }, {
        name: 'Wine Glass',
        image: '/assets/img/wine-glass.jpg',
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