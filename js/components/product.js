
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
    constructor(props) {
        this.product = props.product;
        this.onSelect = props.onSelect;

    }
    render() {
        let dom = template(this.product);
        this.li = dom.querySelector('li');
        this.li.addEventListener('click', () => {
            this.onSelect(this.product);
        });

        return dom; 
    }
}
