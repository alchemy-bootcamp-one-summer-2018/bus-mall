import html from '../html.js';
import createProducts from '../services/product-api.js';
import Results from '../components/results.js';

let template = function() {
    return html`
        <header>
            <h1>Bus Mall</h1>
        </header>

        <main>
            <section id="survey">
                <div
            </section>
            <section>
            </section>
        </main>
    
    `;
};

export default class App {

    render() {
        let dom = template();
        this.productApi = dom.querySelector('section.survey');
        let callCreateProducts = createProducts();
        console.log('created products', callCreateProducts);

        let section = dom.querySelector('div');
        let results = new Results();
        section.appendChild(results.render());
        console.log('results', results);

        return dom;
    }
}