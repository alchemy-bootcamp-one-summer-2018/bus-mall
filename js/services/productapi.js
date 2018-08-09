import data from './data.js';
let products = data.products;

if(!products) {
    data.products = createProducts();
    products = data.products;
}
function createProducts() {
    return [{
        id: 1,
        name: 'Luggage Droid',
        image: 'img/bag.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 2,
        name: 'Fruit Dismemberer',
        image: 'img/banana.jpg',
        viewed: 0,
        votes: 0,
    }, {
        id: 3,
        name: 'Hands-Free Toilet Buddy',
        image: 'img/bathroom.jpg',
        viewed: 0,
        votes: 0,
    }, {
        id: 4,
        name: 'Peep-Toe Wellies',
        image: 'img/boots.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 5,
        name: 'The Wallace',
        image: 'img/breakfast.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 6,
        name: 'Meat Gums',
        image: '/img/bubblegum.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 7,
        name: 'Lil\' Deep One',
        image: '/img/cthulhu.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 8,
        name: 'Duck Muzz',
        image: '/img/dog-duck.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 9,
        name: 'Dragon Meat',
        image: 'img/dragon.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 10,
        name: 'U-<em>pen</em>-sils',
        image: '/img/pen.jpg',
        viewed: 0,
        votes: 0
    }, { 
        id: 11,
        name: 'pet-sweep',
        image:'/img/pet-sweep.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 12,
        name: 'Slice-a-slice',
        image: '/img/scissors.jpg',
        viewed: 0,
        votes:  0
    }, {
        id: 13,
        name: 'shark',
        image: '/img/shark.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 14,
        name: 'Broom-Baby',
        image: '/img/sweep.png',
        viewed: 0,
        votes: 0
    }, {
        id: 15,
        name: 'Luke-Warmer',
        image: '/img/tauntaun.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 16,
        name: 'Can of \'Corn',
        image: '/img/unicorn.jpg',
        viewed: 0,
        votes: 0
    }, {
        id: 17,
        name: 'Tentacle Friend',
        image: '/img/usb.gif',
        viewed: 0,
        votes: 0
    }, {
        id: 18,
        name: 'Infinity Mug',
        image: 'img/water-can.jpg',
        viewed: 0,
        votes:  0
    }, {
        id: 19,
        name: 'wine-glass',
        image: 'img/wine-glass.jpg',
        viewed: 0,
        votes: 0
    }];
}

let copy = products.slice();
function randomProductIndex(max){
    return Math.floor(Math.random() * max);
}
let randomProductArray = [];

export default {
    get: function() {
        return products;
    },
    getRandomThree: function() {
        for(let i = 0; i < 3; i++){
            let index = randomProductIndex(copy.length);
            
            let randomProduct = copy[index];
            copy.splice(index, 1);
            randomProductArray.push(randomProduct);
        }
        console.log('this is my random product array', randomProductArray);
        return randomProductArray;
    }
    
    
};