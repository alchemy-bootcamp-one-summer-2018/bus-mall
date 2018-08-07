
class Product {

    constructor(name) {
        this.name = name;
        this.element = `<img src="/img/${name}.jpg" alt="${name}" class="${name}">`;
        this.shows = 0;
        this.votes = 0;
    }

}

let names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function getProductList() {
    let list = [];
    for(let i = 0; i < names.length; i++) {
        let product = new Product (`${names[i]}`);
        list.push(product);
        console.log('get list', list);
    } 
    return list;
}

let productList = getProductList();
console.log('api product list', productList);

export default {
    get: function() {
        return productList;
    },
    getRandomProducts: function() {

        let threeProducts = [];
        let productListCopy = productList.slice();
        console.log('imageElements after slice', productListCopy);
        
        for(let i = 0; i < 3; i++) {
            let random = getRandomInteger(productListCopy.length);
            let randomProduct = productListCopy[random];
            threeProducts.push(randomProduct);
            productListCopy.splice(random, 1);
        }
        console.log('three prodcuts', threeProducts);
        return threeProducts;
    }
};

function getRandomInteger(max) {
    return Math.floor(Math.random() * (max));
}


