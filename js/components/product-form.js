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
        
        function randomProductIndex(max){
            return Math.floor(Math.random() * max);
        }
        let copy = this.products.slice();
        
    
        for(let i = 0; i < 3; i++){
            let index = randomProductIndex(copy.length);
            let randomProduct = copy[index];
            console.log(randomProduct);
            
            let ul = dom.querySelector('ul');
            let product = new Product({
                item: randomProduct
            });
            ul.appendChild(product.render());
            copy.splice(index, 1);
        }

        return dom;
    }
}