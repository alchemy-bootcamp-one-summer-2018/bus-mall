
function createItems() {
    let data = [{
        name: 'breakfast',
        image: 'images/breakfast.jpg',
        clicks: 0
    }, {
        name: 'bubblegum',
        image: 'images/bubblegum.jpg',
        clicks: 0
    }, {
        name: 'chair',
        image: 'images/chair.jpg',
        clicks: 0
    }, {
        name: 'cthulhu',
        image: 'images/cthulhu.jpg',
        clicks: 0
    }, {
        name: 'dog-duck',
        image: 'images/dog-duck.jpg',
        clicks: 0
    }, {
        name: 'bag',
        image: 'images/bag.jpg',
        clicks: 0
    }, {
        name: 'banana',
        image: 'images/banana.jpg',
        clicks: 0
    }, {
        name: 'bathroom',
        image: 'images/bathroom.jpg',
        clicks: 0
    }, {
        name: 'boots',
        image: 'images/boots.jpg',
        clicks: 0
    }, {
        name: 'dragon',
        image: 'images/dragon.jpg',
        clicks: 0
    }, {
        name: 'pen.jpg',
        image: 'images/pen.jpg',
        clicks: 0
    }
    
    ];

    return data;
}

let items = createItems();

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
