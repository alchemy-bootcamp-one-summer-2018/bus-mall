import html from '/js/html.js';
import ProductResults from '/js/product-results.js';
import productsApi from '/js/products-api.js';
import ResultsChart from '/js/resultsChart.js';


let template = function() {
    return html`
        <p> Results </p>

        <ul> </ul>

        <section> </section>  
   `;
};

export default class Results {
    constructor() {
        this.results = productsApi.get();
        // this.allProducts = props.allProducts;
       
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        let section = dom.querySelector('section');

        for(let i = 0; i < this.results.length; i++) {
            let productResults = new ProductResults({
                product: this.results[i]

            });
            
            ul.appendChild(productResults.render());

        }

        let resultsChart = new ResultsChart({
            results: this.results

        });

        section.appendChild(resultsChart.render());

        return dom;
    }
}