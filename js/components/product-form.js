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
        this.onSelect = props.onSelect;
        //update method to       
    }

    render() {
        function randomProductIndex(max){
            return Math.floor(Math.random() * max);
        }
        let dom = template();
        let copy = this.items;
        
        for(let i = 0; i < 3; i++){
            let index = randomProductIndex(copy.length);
            console.log(index);
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