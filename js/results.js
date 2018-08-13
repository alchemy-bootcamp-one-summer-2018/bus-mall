import html from '/js/html.js';
import ProductResults from '/js/product-results.js';
import productsApi from '/js/products-api.js';
import ResultsChart from '/js/resultsChart.js';
import Header from '/js/header.js';
import Footer from '/js/footer.js';


let template = function() {
    return html`
    <header> </header>
        <h2> Results </h2>

        <ul> </ul>

        <section> </section>  
        <footer></footer>
   `;
};

export default class Results {
    constructor() {
        this.results = productsApi.get();

       
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        let section = dom.querySelector('section');
        this.header = dom.querySelector('header');
        this.footer = dom.querySelector('footer');

        for(let i = 0; i < this.results.length; i++) {
            let productResults = new ProductResults({
                product: this.results[i]

            });
            
            ul.appendChild(productResults.render());

        }

        let resultsChart = new ResultsChart({
            results: this.results

        });

        let header = new Header({
            header: this.header

        });

        let footer = new Footer({
            footer: this.footer

        });

        
        this.header.appendChild(header.render());
        section.appendChild(resultsChart.render());
        this.footer.appendChild(footer.render());
        

        return dom;
    }
}