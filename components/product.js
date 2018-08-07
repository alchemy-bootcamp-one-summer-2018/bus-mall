import html from '../html.js';

let template = function(product) {
    return html`
        <li>
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
        </li>
    `;
};

export default class ProductCard {
    constructor(product) {
        this.product = product;

    }
    render() {
        let dom = template(this.product);
        this.li = dom.querySelector('li');

        return dom; 
    }
}
