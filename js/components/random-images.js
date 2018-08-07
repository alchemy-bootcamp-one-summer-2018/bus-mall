import html from '../html.js';
import productList from '../services/product-api.js';

console.log('product list random images', productList);
console.log('get element', productList[0].element);

let template = function() {
    return html`
        <div class="images"></div>
    `;

};

// let images = [];

// function importImages(name) {
//     console.log('name length', names.length);
//     for(let i = 0; i < names.length; i++) {
//         let product = {
//             name: name[i],
//             src: `/img/${name[i]}.jpg`
//         };
//         images.push(product); 
//     }
//     return images;
// }

// importImages(names);
// console.log('images', images);

// let imageElements = [];
// function imageHtml(images) {
//     for(let i = 0; i < images.length; i++){
//         let image = images[i];
//         console.log('image test', image);
//         console.log('img src', image.src);
//         imageElements.push(`<img src="${image.src}" alt="${image.name}" class="${image.name}">`);
//     }
//     return imageElements;
// }

// imageHtml(images);
// console.log('imageElements', imageElements);

function getRandomInteger(max) {
    return Math.floor(Math.random() * (max));
}

let threeImages = '';
function getRandomImages() {
    let productListCopy = productList.slice();
    console.log('imageElements after slice', productListCopy);

    for(let i = 0; i < 3; i++) {
        let random = getRandomInteger(productListCopy.length);
        let randomImageElement = productListCopy[random].element;
        threeImages += randomImageElement;
        productListCopy.splice(random, 1);
        console.log('image elements copy', productListCopy);
    }
    return threeImages;
}

getRandomImages();
console.log('threeImages', threeImages);

export default class RandomImage {
    constructor(props) {
        this.testImage = props.testImage;
    }
    render() {
        let dom = template(); 
        let imageArea = dom.querySelector('div.images');
        imageArea.innerHTML = threeImages;

        
        let bag = dom.querySelector('img.bag');
        console.log('query test', bag);
        bag.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('event listener working for', productList[0].name);
            threeImages = '';
            getRandomImages();
            console.log('three new images', threeImages);
            imageArea.innerHTML = threeImages;
            return imageArea.innerHTML;
        });

        return dom;
    }
}