
import data from './data.js';

let items = data.items;

if(!items) {
    data.items = createItems();
    items = data.items;
}

function createItems() {
    let data = [{
        name: 'breakfast',
        image: 'images/breakfast.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'bubblegum',
        image: 'images/bubblegum.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'chair',
        image: 'images/chair.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'cthulhu',
        image: 'images/cthulhu.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'dog-duck',
        image: 'images/dog-duck.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'bag',
        image: 'images/bag.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'banana',
        image: 'images/banana.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'bathroom',
        image: 'images/bathroom.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'boots',
        image: 'images/boots.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'dragon',
        image: 'images/dragon.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'pen.jpg',
        image: 'images/pen.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'pet-sweep',
        image: 'images/pet-sweep.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'scissors',
        image: 'images/scissors.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'shark',
        image: 'images/shark.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'sweep',
        image: 'images/sweep.png',
        clicks: 0,
        views: 0
    }, {
        name: 'tauntaun',
        image: 'images/tauntaun.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'unicorn.jpg',
        image: 'images/unicorn.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'usb',
        image: 'images/usb.gif',
        clicks: 0,
        views: 0
    }, {
        name: 'water-can',
        image: 'images/water-can.jpg',
        clicks: 0,
        views: 0
    }, {
        name: 'wine-glass',
        image: 'images/wine-glass.jpg',
        clicks: 0,
        views: 0
    }
    
    ];

    return data;
}

// let items = createItems();

export default {

    get: function() {
        return items;
    },

    getRandomProducts: function() {
        let products = [];
        
        while(products.length < 3) {
            let randNum = Math.floor(Math.random() * items.length);
            let randomProduct = items[randNum];
            if(!products.includes(randomProduct)) {
                products.push(randomProduct);
            }
        }
        return products;
    }




};
