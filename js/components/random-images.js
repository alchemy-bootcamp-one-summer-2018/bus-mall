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



// getRandomImages();


export default class RandomImage {
    constructor(props) {
        this.testImage = props.testImage;
    }
    render() {
        let dom = template(); 
        let imageArea = dom.querySelector('div.images');
        imageArea.innerHTML = threeImages;

        let firstProduct = threeNames[0];
        let secondProduct = threeNames[1];
        let thirdProduct = threeNames[2];
        console.log('products', firstProduct, secondProduct, thirdProduct);

        let one = dom.querySelector(`img.${firstProduct}`);
        console.log('one', one);
        one.addEventListener('click', () => {
            threeImages = '';
            threeNames = [];
            getRandomImages();
            console.log('three new images', threeImages);
            imageArea.innerHTML = threeImages;
            return imageArea.innerHTML;
        });
        
        let two = dom.querySelector(`img.${secondProduct}`);
        console.log('two', two);
        two.addEventListener('click', () => {
            threeImages = '';
            threeNames = [];
            getRandomImages();
            console.log('three new images', threeImages);
            imageArea.innerHTML = threeImages;
            return imageArea.innerHTML;
        });
        
        let three = dom.querySelector(`img.${thirdProduct}`);
        console.log('three', three);
        three.addEventListener('click', () => {
            threeImages = '';
            threeNames = [];
            getRandomImages();
            console.log('three new images', threeImages);
            imageArea.innerHTML = threeImages;
            return imageArea.innerHTML;
        });

        return dom;
    }
}