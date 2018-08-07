import html from '/js/html.js';
import Product from './product.js';

let template = function() {
    return html`
        <ul>
            <h3> Select an Item! </h3>
                        
        </ul>
        
   `;
};

export default class ProductForm {
    constructor(props) {
        this.items = props.items;
       
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        for(let i = 0; i < this.items.length; i++){
            let product = new Product({
                item: this.items[i]
            });
            ul.appendChild(product.render());
        }
        
        return dom;
    }
}