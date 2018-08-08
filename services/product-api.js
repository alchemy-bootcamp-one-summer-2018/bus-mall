import data from './data.js';

class Product {
    
    constructor(name, image){
        this.name = name;
        this.image = './assets/' + image;
        this.views = 0;
        this.count = 0;
    }
    
}
    
const bag = new Product('bag', 'bag.jpg');
const banana = new Product('banana', 'banana.jpg');
const bathroom = new Product('bathroom', 'bathroom.jpg');
const boots = new Product('boots', 'boots.jpg');
const breakfast = new Product('breakfast', 'breakfast.jpg');
const bubblegum = new Product('bubblegum', 'bubblegum.jpg');
const chair = new Product('chair', 'chair.jpg');
const cthulhu = new Product('cthulhu', 'cthulhu.jpg');
const dogDuck = new Product('dog-duck', 'dog-duck.jpg');
const dragon = new Product('dragon', 'dragon.jpg');
const pen = new Product('pen', 'pen.jpg');
const petSweep = new Product('pet-sweep', 'pet-sweep.jpg');
const scissors = new Product('scissors', 'scissors.jpg');
const shark = new Product('shark', 'shark.jpg');
const sweep = new Product('sweep', 'sweep.png');
const tauntaun = new Product('tauntaun', 'tauntaun.jpg');
const unicorn = new Product('unicorn', 'unicorn.jpg');
const usb = new Product('usb', 'usb.gif');
const waterCan = new Product('water-can', 'water-can.jpg');
const wineGlass = new Product('wine-glass', 'wine-glass.jpg');
    
let productList = [
    bag, 
    banana,
    bathroom,
    boots,
    breakfast,
    bubblegum, 
    chair, 
    cthulhu, 
    dogDuck, 
    dragon, 
    pen, 
    petSweep, 
    scissors,
    shark,
    sweep,
    tauntaun,
    unicorn,
    usb,
    waterCan,
    wineGlass
];


export default {
    get: function() {
        return productList;
    },

};

