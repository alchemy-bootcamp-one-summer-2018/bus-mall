import html from '../html.js';
import ProductResult from './product-result.js';

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

        return dom;
    }
}
