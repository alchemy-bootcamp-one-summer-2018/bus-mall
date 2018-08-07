import html from '../html.js';

let template = function() {
    return html`
        <div class="images"></div>
    `;

};

let names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum'];


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
        imageElements.push(`<img src='${image.src}' alt='${image.name}'>`);
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
        
        // let votingArea = dom.getElementById('voting-area');
        // votingArea.appendChild(this.testImage.render());

        return dom;
    }
}