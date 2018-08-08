import html from '../html.js';
import ProductSurvey from './product-survey.js';
import Results from './results.js';
// import getRandomImage from '../services/sales-api.js';
import salesApi from '../services/sales-api.js';

let template = function() {
    return html `
        <header>
            <h1>Bus Mall</h1>
        </header>
        <body>
            <div>
            </div>
            <section class="results">
            </section>
        </body>
      `;
};

export default class App {

    render() {
        let dom = template();
        let div = dom.querySelector('div');

        let items = salesApi.getRandomProducts();
        console.log('items', items);

        let productSurvey = new ProductSurvey({
            products: items,
            // additional things that get passed down -- handleClick - everytime we get a click...
        });

        div.appendChild(productSurvey.render());

        let section = dom.querySelector('section.results');
        let results = new Results();
        section.appendChild(results.render());
        console.log('results', results);

        return dom;
    }  

}
