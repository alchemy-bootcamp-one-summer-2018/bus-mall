import data from './data.js';


class Product {
    constructor(name) {
        this.name = name;
        this.views = 0;
        this.votes = 0;
    }
}

function getProductList() {
    let names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
    let data = [];
    for(let i = 0; i < names.length; i++) {
        let product = new Product (`${names[i]}`);
        data.push(product);
    } 
    return data;
}

let productList = data.productList;

if(!productList) {
    data.productList = getProductList();
    productList = data.productList;
}

export default {
    get: function() {
        return productList;
    },

    getRandomProducts: function() {
        let threeProducts = [];
        let productListCopy = productList.slice();
        
        for(let i = 0; i < 3; i++) {
            let random = getRandomInteger(productListCopy.length);
            let randomProduct = productListCopy[random];
            threeProducts.push(randomProduct);
            productListCopy.splice(random, 1);
        }
        return threeProducts;
    }
};

function getRandomInteger(max) {
    return Math.floor(Math.random() * (max));
}


