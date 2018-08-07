import html from '../html.js';
import ProductSurvey from './product-survey.js';
import Results from './results.js';
import productApi from '../services/product-api.js';

let template = function() {
    return html `
        <header>
            <h1>BusMall<h1>
        </header>
        <main></main>
    `;
};

export default class App {
    render() {
        let dom = template();
        let main = dom.querySelector('main');
        let products = productApi.getThreeRandomProduct();
        console.log(products);
        let productSurvey = new ProductSurvey({
            products: products
        });
        let results = new Results();
        main.appendChild(productSurvey.render());
        main.appendChild(results.render());
        return dom;
    }
}

