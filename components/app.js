import html from '../html.js'; 
import productApi from '../productApi.js';
import ProductsList from './productsList.js';
 
let template = function() {
    return html`
        <header>
            <h1> Please pick a product</h1>
        </header>
            <main>
            </main>
    `;
};


export default class App {
    render() {
        let dom = template();
        let main = dom.querySelector('main');

        let products = productApi.get();
        let productsList = new ProductsList(products);
        main.appendChild(productsList.render());
        console.log(products);
        return dom;
    }
}


