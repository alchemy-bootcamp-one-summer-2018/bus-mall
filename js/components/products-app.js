import html from '../html.js';
import productApi from '../services/product-api.js';
import ProductImage from './product-images.js';

let template = function() {
    return html`        
        <body>
            <header>
                <h1>Bus Mall Market Research App</h1>
            </header>
            <nav>
                <a id="index" href="../../index.html">Market Research</a>
                <a id="results" href="../../results.html">Results</a>
                <a id="products" href="../../products.html">Products</a>
            </nav>
            <section class="product-display">
            </section>
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
        console.log('hello!');


        for(let i = 0; i < this.products.length; i++) {
            let productImage = new ProductImage ({
                product: this.products[i]
            });

            productDisplay.appendChild(productImage.render());


        }

        

        return dom;

    }
}


