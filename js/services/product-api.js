
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

export default productList;

