
class Product {

    constructor(name) {
        this.name = name;
        this.element = `<img src="/img/${name}.jpg" alt="${name}" class="${name}">`;
        this.shows = 0;
        this.views = 0;
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
    getRandomImages: function() {

        let threeImages = '';
        let threeNames = [];
        let productListCopy = productList.slice();
        console.log('imageElements after slice', productListCopy);
        
        for(let i = 0; i < 3; i++) {
            let random = getRandomInteger(productListCopy.length);
            let randomImageElement = productListCopy[random].element;
            let randomImageName = productListCopy[random].name;
            threeImages += randomImageElement;
            threeNames.push(randomImageName);
            console.log('threeImages', threeImages);
            console.log('threeNames', threeNames);
            productListCopy.splice(random, 1);
            console.log('image elements copy', productListCopy);
        }
        return threeImages;
    }
};

function getRandomInteger(max) {
    return Math.floor(Math.random() * (max));
}


