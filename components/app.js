import html from '../html.js';
import ProductSurvey from './product-survey.js';
import Results from './results.js';
import productApi from '../services/product-api.js';
import Header from './header.js';

let template = function() {
    return html `
        <header></header>
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
        this.header = dom.querySelector('header');

        //set products to random three images 
        
        let productSurvey = new ProductSurvey({
            products: this.products,
            onComplete: () => {
                //launch product results
                this.renderResults();
            }
        });

        let header = new Header ({

        });
        // let results = new Results();
        this.header.appendChild(header.render());
        this.main.appendChild(productSurvey.render());
        // main.appendChild(results.render());
        return dom;
    }
}

