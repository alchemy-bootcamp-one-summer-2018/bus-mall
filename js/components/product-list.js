import html from '../html.js';
import Product from './product.js';

let template = function() {
    return html`
        <section>
            <h2></h2>
            <ul></ul>
        </section>
    `;
};

export default class ProductList {
    constructor(props) {
        this.products = props.products;
        this.onSelect = props.onSelect;
    }

    update(props) {
        this.products = props.products;

        this.removeProducts();

        this.renderProducts();
    }

    removeProducts() {
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }
    }

    renderProducts() {
        for(let i = 0; i < this.products.length; i++) {
            let product = new Product({
                product: this.products[i],
                onSelect: this.onSelect
            });
            this.ul.appendChild(product.render());
        }
    }

    render() {
        let products = this.products;
        console.log('products:', products);
        let dom = template();
        this.ul = dom.querySelector('ul');
        
        this.renderProducts();
        return dom;
    }
}