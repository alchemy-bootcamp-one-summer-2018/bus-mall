import html from '../html.js';

let template = function(product) {
    let name = product.name;
    let views = product. views;
    let count = product.count;

    return html`
        <li>${name} was shown ${views} and voted for ${count} times</li>
    `;
};

export default class ProductResult {
    constructor(props) {
        this.product = props.product;
    }

    render() {
        let dom = template(this.product);
        return dom;
    }
}


