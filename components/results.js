import html from '../html.js';
import ProductResult from './product-result.js';
import ProductChart from './product-chart.js';

let template = function() {
    return html`
        <h2>Results</h2>
         <ul><ul>
        <section></section>
    `;
};

export default class Results{
    constructor(props){
        this.products = props.products;
    }
    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        for(let i = 0; i < this.products.length; i++) {
            let productResult = new ProductResult ({
                product: this.products[i]
            });
            ul.appendChild(productResult.render());
        }

        let section = dom.querySelector('section');
        let productChart = new ProductChart({
            products: this.products
        });
        
        section.appendChild(productChart.render());

        return dom;
    }
}
