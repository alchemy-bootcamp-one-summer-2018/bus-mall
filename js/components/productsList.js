import html from '../html.js';
import ProductCard from './product.js';

let template = function() {
    return html`
    <section>
        <h2>ProductList<h2>
        <ul></ul>
    </section>    
`;
};
export default class ProductsList {
    constructor(props) {
        this.onSelect = props.onSelect;
        this.products = props.products;
    }

    renderProduct(product) {
        let productCard = new ProductCard({
            product: product,
            onSelect: this.onSelect
        });
        this.ul.appendChild(productCard.render());
        //this.productCard.push(productCard);
    }
    render() {  
        let products = this.products;
        let dom = template();
        this.ul = dom.querySelector('ul');

        for(let i = 0; i < products.length; i++) {
            this.renderProduct(products[i]);
        }
         
        return dom;
    }
}

