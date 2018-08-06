import data from './data.js';

let items = data.items;

if(!items) {
    data.items = createItems();
    items = data.items;
}

function createItems() {
    let data = [{
        name: 'breakfast',
        image: 'images/breakfast.jpg'
    }, {
        name: 'bubblegum',
        image: 'images/bubblegum.jpg'
    }, {
        name: 'chair',
        images: 'images/chair.jpg',
    }, {
        name: 'cthulhu',
        images: 'images/cthulhu.jpg'
    }, {
        name: 'dog-duck',
        images: 'images/dog-duck.jpg'
    }];
}

