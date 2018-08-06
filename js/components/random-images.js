import html from '../html.js';

let template = function() {
    return html`
        <img src='../../img/bag.jpg'>
    `;

};

function importImages () {
    var imageElements = [];
    imageElements.push({
        name: 'Banana',
        src: `/img/${name}.jpg`
    });  
}



function getRandomImage() {
    
}

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