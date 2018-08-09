import data from './data.js';

let products = data.products;

if(!products) {
    data.products = createProducts();
    products = data.products;
} 

function createProducts() {
    return [{
        name: 'bag',
        image:'../images/bag.jpg',
        views: 0,
        votes: 0,

    }, {
        name: 'banana',
        image:'../images/banana.jpg',
        views: 0,
        votes: 0,
    }, {
        name:'bathroom',
        image:'../images/bathroom.jpg',
        views: 0,
        votes: 0,

    }, { name:'boots',
        image:'../images/boots.jpg',
        views: 0,
        votes: 0,

    }, { name:'breakfast',
        image:'../images/breakfast.jpg',
        views: 0,
        votes: 0,

    }, { name:'bubblegum',
        image:'../images/bubblegum.jpg',
        views: 0,
        votes: 0,

    }, { name:'cthulhu',
        image:'../images/cthulhu.jpg',
        views: 0,
        votes: 0,

    }, { name:'dog-duck',
        image:'../images/dog-duck.jpg',
        views: 0,
        votes: 0,

    }, { name:'dragon',
        image:'../images/dragon.jpg',
        views: 0,
        votes: 0,

    }, { name:'pen',
        image:'../images/pen.jpg',
        views: 0,
        votes: 0,

    }, { name:'pet-sweep',
        image:'../images/pet-sweep.jpg',
        views: 0,
        votes: 0,

    }, { name:'scissors',
        image:'../images/scissors.jpg',
        views: 0,
        votes: 0,

    }, { name:'shark',
        image:'../images/shark.jpg',
        views: 0,
        votes: 0,

    }, { name:'sweep',
        image:'../images/sweep.png',
        views: 0,
        votes: 0,

    }, { name:'tauntaun',
        image:'../images/tauntaun.jpg',
        views: 0,
        votes: 0,

    }, { name:'unicorn',
        image:'../images/unicorn.jpg',
        views: 0,
        votes: 0,

    }, { name:'usb',
        image:'../images/usb.gif',
        views: 0,
        votes: 0,

    }, { name:'water-can',
        image:'../images/water-can.jpg',
        views: 0,
        votes: 0,

    }, { name:'wine glass',
        image:'../images/wine-glass.jpg',
        views: 0,
        votes: 0,
    
    }, { name:'wireframe',
        image:'../images/wireframe.png',
        views: 0,
        votes: 0,
    
    }];
    
} 
    
export default { 

    get: function() {

        return products;
    
    },

    
    getRandomImages: function() {
        // empty array to fill with random images
            
        let randomArray = [];
        let copyCreateProducts = products.slice();
    
        for(let i = 0; i < 3; i++) {
            let randomNum = Math.floor(Math.random() * (copyCreateProducts.length));
            let randomImage = copyCreateProducts[randomNum];
            randomArray.push(randomImage);
    
            copyCreateProducts.splice(randomNum, 1);
        }
           
        return randomArray;

    },

    handleSelect: function(productName) {
        
        let selectedProduct = products.filter(product => product.name === productName);
        selectedProduct[0].votes ++;

    }


};






