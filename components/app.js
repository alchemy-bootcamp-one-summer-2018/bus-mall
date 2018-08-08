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
    constructor() {
        this.products = productApi.get();
    }

    renderResults() {
        while(this.main.lastElementChild) {
            this.main.lastElementChild.remove();
        }

        let results = new Results({

            products: this.products

        });
        this.main.appendChild(results.render());
    }

    render() {
        let dom = template();
        this.main = dom.querySelector('main');

        //set products to random three images 
        
        let productSurvey = new ProductSurvey({
            products: this.products,
            onComplete: () => {
                //launch product results
                this.renderResults();
            }
        });
        // let results = new Results();
        this.main.appendChild(productSurvey.render());
        // main.appendChild(results.render());
        return dom;
    }
}

