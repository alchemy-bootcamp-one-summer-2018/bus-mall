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

// function imageElements() {
//     for(let i = 0; i < images.length; i++){
//         let imageElements = [];
//         imageElements.push(`<img src='${images[i].src.value}' alt='${name}'>`);
//     }
    
// }

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