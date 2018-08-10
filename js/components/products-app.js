import html from '../html.js';
import productApi from '../services/product-api.js';
import ProductImage from './product-images.js';
import Header from './header.js';

let template = function() {
    return html`        
        <body>
            <section class="products-header"></section>
            <section class="product-display"></section>
        <body>
    `;
};

export default class ProductsApp {
    constructor() {
        this.products = productApi.get();
    }

    render() {
        let dom = template();
        let productDisplay = dom.querySelector('.product-display');

        let headerDisplay = dom.querySelector('.products-header');
        let header = new Header ({});
        headerDisplay.appendChild(header.render());


        for(let i = 0; i < this.products.length; i++) {
            let productImage = new ProductImage ({
                product: this.products[i]
            });

            productDisplay.appendChild(productImage.render());
        }

        

        return dom;

    }
}


