//import data from './data.js';

let products = createProducts();
console.log('products', products);
function createProducts() {
    return [{
        name: 'bag',
        image: './assets/bag.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'banana',
        image: './assets/banana.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'bathroom',
        image: './assets/bathroom.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'boots',
        image: './assets/boots.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'breakfast',
        image: './assets/breakfast.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'bubblegum',
        image: './assets/bubblegum.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'chair',
        image: './assets/chair.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'cthulhu',
        image: './assets/cthulhu.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'dog-duck',
        image: './assets/dog-duck.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'dragon',
        image: './assets/dragon.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'pen',
        image: './assets/pen.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'scissors',
        image: './assets/scissors.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'shark',
        image: './assets/shark.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'tauntaun',
        image: './assets/tauntaun.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'unicorn',
        image: './assets/unicorn.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'water-can',
        image: './assets/water-can.jpg',
        viewCount: 0,
        numberClicks: 0
    },
    {
        name: 'wine-glass',
        image: './assets/wine-glass.jpg',
        viewCount: 0,
        numberClicks: 0
    
    }];
}  

export default {
    get: function() {
        return products;
    },
    getRandomProducts: function(){
        let imagesDisplayed = [];

        while(imagesDisplayed.length < 3) {
            let randomIndex = Math.floor(Math.random() * products.length);
            let product = products[randomIndex];
            if(imagesDisplayed.includes(product)) continue;
            imagesDisplayed.push(product);
    
        }

        imagesDisplayed.forEach(product => product.viewCount ++);
        console.log('is this working', imagesDisplayed);

        return imagesDisplayed;

    },

    handleSelect: (productName) => {
        let selectedImage = products.filter(product => product.name === productName);
        selectedImage[0].numberClicks++;
    }
    

};

