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
        name: 'U-pen-sils',
        image: '/img/pen.jpg',
        viewed: 0,
        votes: 0
    }, { 
        id: 11,
        name: 'Pet-Sweep',
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
        name: 'Baby Chomper',
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
        name: 'Wonky Goblet',
        image: 'img/wine-glass.jpg',
        viewed: 0,
        votes: 0
    }];
}

function randomProductIndex(max){
    return Math.floor(Math.random() * max);
}

export default {

    get: function() {
        return products;
    },
    
    getRandomThree: function() {
        let randomProductArray = [];
        while(randomProductArray.length < 3){
                   
            let index = randomProductIndex(products.length);            
            let randomProduct = products[index];
    
            randomProduct.viewed++;
            if(randomProductArray.includes(randomProduct)){
                continue;
            }
                
            randomProductArray.push(randomProduct);
            
        }
        return randomProductArray;
    },

    handleSelect: function(productId) {
        let selectedProduct = products.filter(product => product.id === productId);        
        selectedProduct[0].votes ++;        
    },
    
   
};