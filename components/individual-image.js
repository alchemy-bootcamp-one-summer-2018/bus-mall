import html from '../html.js';

let template = function() {
    return html`
        <img>
   `;
};

export default class IndividualImage{
    
    constructor(props) {
        this.product = props.product;
    }

    render() {
        let dom = template();
        let image = dom.querySelector('img');
        image.src = this.product.image;
        return dom;
    }
}