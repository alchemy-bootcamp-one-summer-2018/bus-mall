import html from '/js/html.js';
import Product from './product.js';

let template = function() {
    return html`
        <section>
            <h3> this is a form </h3>
            
            
        </section>
        
   `;
};

export default class ProductForm {
    constructor(props) {
       
    }

    render() {
        let dom = template();
        let section = dom.querySelector('section');
        let product = new Product();
        for(let i = 0; i < 3; i++){
            section.appendChild(product.render());
        }

        



        return dom;
    }
}