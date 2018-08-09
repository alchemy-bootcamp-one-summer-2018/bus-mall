import html from '../html.js'; 
import productApi from '../services/productApi.js';
import ProductsList from './productsList.js';
 
let template = function() {
    return html`
        <header>
            <h1 class="firstHeader"> Bus Mall</h1>
        </header>
        <div class="flex-container"></div>
        <div>1</div>
        <div>2</div>
            <main class="mainstuff"> This is where stuff goes
            </main>
    `;
};


export default class App {
    render() {
        let dom = template();
        let main = dom.querySelector('main');

        let products = productApi.getRandomProducts();
        let productsList = new ProductsList({
            products: products,
            onSelect:(product) => {
                productApi.handleSelect(product.name);
            }
        });
        main.appendChild(productsList.render());
        console.log(products);
        return dom;
    
    }
}
