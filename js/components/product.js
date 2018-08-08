import html from '/js/html.js';

let template = function(product) {
    return html`
        <li>
            <h3>${product.name}</h3>
            <img src="${product.image}">
        </li>
   `;
};

export default class Product {
    constructor(props) {
        this.product = props;
    }

    render() {
        let dom = template(this.product);
        this.li = dom.querySelector('li');
        console.log('this product:', this.product);

        return dom;
    }
}