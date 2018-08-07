import html from '../html.js';

let template = function() {
    return html`
        <img src='../../img/bag.jpg'>
    `;

};

let images = [];

function importImages(name) {
    images.push({
        name: name,
        src: `/img/${name}.jpg`
    });  
    return images;
}
importImages('banana');
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

// function getRandomImage() {
    
// }

export default class RandomImage {
    constructor(props) {
        this.testImage = props.testImage;
    }
    render() {
        let dom = template(); 
        // let votingArea = dom.getElementById('voting-area');
        // votingArea.appendChild(this.testImage.render());

        return dom;
    }
}