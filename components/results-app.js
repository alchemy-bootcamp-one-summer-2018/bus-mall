import html from '../html.js';
import Results from './results.js';
import ProductChart from './product-chart.js';
import productApi from '../services/product-api.js';
import Header from './header.js';
import Methods from './lorem-ipsum.js';
let template = function() {
    return html `
        <header></header>
        <main class="grid"></main>
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

        let data;
        let json = window.localStorage.getItem('data');
        if(json && json !== 'undefined') {
            data = JSON.parse(json);
        }
        this.products = data.products;
        console.log('are you here', data.products);

        let dom = template();
        this.main = dom.querySelector('main');
        this.header = dom.querySelector('header');
        let productChart = new ProductChart({
            products: this.products
        });

        let header = new Header ({

        });

        let methods = new Methods ({

        });

        this.renderResults();
        this.main.appendChild(productChart.render());
        this.main.appendChild(methods.render());
        this.header.appendChild(header.render());
        return dom;
    }
}

