import html from '../html.js';

let template = function() {
    return html`
        <img src='../../img/bag.jpg'>
    `;

};

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