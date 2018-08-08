import html from '../html.js';
//import createProducts from '../services/product-api.js';
//import Results from '../components/results.js';
import productApi from '../services/product-api.js';
import ProductList from './product-list.js';

let template = function() {
    return html`
        <header>
            <div class="image" ></div>​
        </header>

        <main>
        </main>
    
    `;
};

export default class App {

    render() {
        let dom = template();
        let resultsDiv = dom.querySelector('main');
        let displayProducts = productApi.randomize();
        console.log('display products', displayProducts);
    

        let productList = new ProductList(displayProducts);

        resultsDiv.appendChild(productList.render());
        

        return dom;
    }
}