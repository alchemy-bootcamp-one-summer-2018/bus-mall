import html from '../html.js';
import Results from './results.js';
// import ProductChart from './product-chart';
import productApi from '../services/product-api.js';

let template = function() {
    return html `
        <header>
            <h1>BusMall<h1>
        </header>
        <main></main>
    `;
};

export default class ResultsApp {
    
    constructor() {
        this.products = productApi.get();
    }
    
    renderResults() {
        // while(this.main.lastElementChild) {
        //     this.main.lastElementChild.remove();
        // }
    
        let results = new Results({
    
            products: this.products
    
        });
        this.main.appendChild(results.render());
    }
    
    render() {
        let dom = template();
        this.main = dom.querySelector('main');
        this.renderResults();
        return dom;
    }
}

