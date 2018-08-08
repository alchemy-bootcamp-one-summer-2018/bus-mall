import html from '../html.js';
import Product from './product.js';

let template = function() {
    return html`
        <section>
            <h2>Product List</h2>
            <ul></ul>
        </section>
    `;
};

export default class ProductList {
    constructor(props) {
        this.products = props;
    }

    renderProducts(product) {
        let productCard = new Product(product);
        this.ul.appendChild(productCard.render());

    }

    render() {
        let products = this.products;
        let dom = template();
        this.ul = dom.querySelector('ul');
        
        for(let i = 0; i < products.length; i++) {
            this.renderProducts(products[i]);

            return dom;
        }
    }
}