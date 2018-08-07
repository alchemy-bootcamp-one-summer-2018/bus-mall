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
                <div>
                    <img src='../../assets/banana.jpg'>
                </div>
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
        let productList = createProducts();
        console.log('Product List:', productList);
        console.log('Image:', productList[3].image);

        let section = dom.querySelector('div');
        let results = new Results();
        section.appendChild(results.render());
        console.log('results', results);

        return dom;
    }
}