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

    removeImages() {
        while(this.div.children.length) {
            this.div.lastChild.remove();
        }
    }

    updateForm(products) {
        this.removeImages();
        this.products = products;
        for(let i = 0; i < 3; i++){          
            
            let product = new Product({
                product: this.products[i],
                onSelect: this.onSelect
            });

            console.log(this.products[i].name, this.products[i].viewed);

            this.div.appendChild(product.render());
            
        }
    }

    render() {
        let dom = template();
        
           
        for(let i = 0; i < 3; i++){          
            
            this.div = dom.querySelector('div');
            
            let product = new Product({
                product: this.products[i],
                onSelect: this.onSelect
            });

            // console.log(this.products[i].name, this.products[i].viewed);

            this.div.appendChild(product.render());
            
        }

        return dom;
    }
}