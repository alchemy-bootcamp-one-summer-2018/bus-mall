import html from '../html.js';
//import createProducts from '../services/product-api.js';
//import Results from '../components/results.js';
import productApi from '../services/product-api.js';
import ProductList from './product-list.js';
//import voteSelector from './vote-selector.js';

let template = function() {
    return html`
        <header>
            <div class="image" >
        </header>

        <main>
        <section class="report"></section>
        </main>
    
    `;
};

export default class App {
    constructor() {
        this.products = productApi.randomize();
        this.totalCount = 0;
    }

    render() {
        let dom = template();
        let resultsDiv = dom.querySelector('main');
    
        let productProps = {
            products: this.products,
            onSelect: (product) => {
                if(product.count) {
                    product.count++;
                }
                else {
                    product.count = 1;
                }
                this.totalCount++;

                productList.update({
                    products: productApi.randomize()
                });

                if(this.totalCount === 3) {
                    console.log('totalCount', this.totalCount);
                    productList.removeProducts();

                }
            }
        };

        let productList = new ProductList(productProps);

        resultsDiv.appendChild(productList.render());
        

        return dom;
    }
}