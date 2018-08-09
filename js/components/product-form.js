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
        this.products = props.products; 
        this.onSelect = props.onSelect;
        //update method to       
    }

    render() {
        let dom = template();
        
        
        // let copy = this.products.slice();        
    
        for(let i = 0; i < 3; i++){
            
            
            let ul = dom.querySelector('ul');
            let product = new Product({
                product: this.products[i]
            });
            ul.appendChild(product.render());
            
            
        }

        return dom;
    }
}