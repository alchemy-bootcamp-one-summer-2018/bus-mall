import html from '/js/html.js';
import Images from './images.js';

let template = function() {
    return html`
        <h1> this is my template </h1>
        <div></div>
   `;
};

export default class ProductList {
    constructor(props) {
       
    }

    render() {
        let dom = template();
        let images = new Images({});
        this.placeHolder = dom.querySelector('div');
        this.placeHolder.appendChild(images.render());
        return dom;
    }
}