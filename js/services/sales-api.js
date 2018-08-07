
function createItems() {
    let data = [{
        name: 'breakfast',
        image: 'images/breakfast.jpg'
    }, {
        name: 'bubblegum',
        image: 'images/bubblegum.jpg'
    }, {
        name: 'chair',
        image: 'images/chair.jpg',
    }, {
        name: 'cthulhu',
        image: 'images/cthulhu.jpg'
    }, {
        name: 'dog-duck',
        image: 'images/dog-duck.jpg'
    }];

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


//     let data = createItems();
//      
//     console.log('random number', randNum); 

//     function getRandomImage() {
//         let randomImage = data[randNum].image;
//         console.log('randImage', randomImage);
//     }

//     getRandomImage();


};
