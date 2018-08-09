import html from '/js/html.js';
import Product from './product.js';

let template = function() {
    return html`
        <div>
            <h3> Select an Item! </h3>                        
        </div>
    
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
        
           
        for(let i = 0; i < 3; i++){          
            
            let div = dom.querySelector('div');
            
            let product = new Product({
                product: this.products[i],
            });
            this.products[i].viewed++;
            console.log(this.products[i].name, this.products[i].viewed);

            div.appendChild(product.render());
            
        }

        return dom;
    }
}