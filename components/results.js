import html from '../html.js';
import ProductResult from './product-result.js';

let template = function() {
    return html`
    <div class="content">
        <h2 id="results-header">Results</h2>
        <ul><ul>
    </div>
        
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

        return dom;
    }
}
