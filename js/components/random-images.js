import html from '../html.js';
import names from './names.js';

let template = function() {
    return html`
        <div class="images"></div>
    `;

};

let images = [];

function importImages(name) {
    console.log('name length', names.length);
    for(let i = 0; i < names.length; i++) {
        let product = {
            name: name[i],
            src: `/img/${name[i]}.jpg`
        };
        images.push(product); 
    }
    return images;
}
importImages(names);
console.log('images', images);

let imageElements = [];
function imageHtml(images) {
    for(let i = 0; i < images.length; i++){
        let image = images[i];
        console.log('image test', image);
        console.log('img src', image.src);
        imageElements.push(`<img src="${image.src}" alt="${image.name}" class="${image.name}">`);
    }
    return imageElements;
}

imageHtml(images);
console.log('imageElements', imageElements);

function getRandomInteger(max) {
    return Math.floor(Math.random() * (max));
}

let threeImages = '';
function getRandomImages() {
    let imageElementsCopy = imageElements.slice();
    console.log('imageElements after slice', imageElementsCopy);

    for(let i = 0; i < 3; i++) {
        let random = getRandomInteger(imageElementsCopy.length);
        let randomImage = imageElementsCopy[random];
        threeImages += randomImage;
        imageElementsCopy.splice(random, 1);
        console.log('image elements copy', imageElementsCopy);
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

        // for(let i = 0; i < names.length; i++) {
        //     let test = dom.querySelectorAll(`.${names[i]}`);
        //     console.log('query test', test);

        //     imageArea.addEventListener('click', (test) => {
        //         event.preventDefault;
        //         console.log('event listener working for ', names[i]);
        //     });
        // }

        let bag = dom.querySelector('img.bag');
        console.log('query test', bag);
        bag.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('event listener working for', names[0]);
        });

        return dom;
    }
}