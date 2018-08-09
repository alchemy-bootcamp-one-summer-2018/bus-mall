import data from './data.js';

let products = data.products;

if(!products) {
    data.products = createProducts();
    products = data.products;
} 

function createProducts() {
    return [{
        name: 'bag',
        image:'../images/bag.jpg'

    }, {
        name: 'banana',
        image:'../images/banana.jpg'
    }, {
        name:'bathroom',
        image:'../images/bathroom.jpg',

    }, { name:'boots',
        image:'../images/boots.jpg',

    }, { name:'breakfast',
        image:'../images/breakfast.jpg',

    }, { name:'bubblegum',
        image:'../images/bubblegum.jpg',

    }, { name:'cthulhu',
        image:'../images/cthulhu.jpg',

    }, { name:'dog-duck',
        image:'../images/dog-duck.jpg',

    }, { name:'dragon',
        image:'../images/dragon.jpg',

    }, { name:'pen',
        image:'../images/pen.jpg',

    }, { name:'pet-sweep',
        image:'../images/pet-sweep.jpg',

    }, { name:'scissors',
        image:'../images/scissors.jpg',

    }, { name:'shark',
        image:'../images/shark.jpg',

    }, { name:'sweep',
        image:'../images/sweep.png',

    }, { name:'tauntaun',
        image:'../images/tauntaun.jpg',

    }, { name:'unicorn',
        image:'../images/unicorn.jpg',

    }, { name:'usb',
        image:'../images/usb.gif',

    }, { name:'water-can',
        image:'../images/water-can.jpg',

    }, { name:'wine glass',
        image:'../images/wine-glass.jpg',
    
    }, { name:'wireframe',
        image:'../images/wireframe.png',
    
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


};






