import html from '/js/html.js';
import Product from './product.js';

let template = function() {
    return html`
        <form>
            <ul>
                <h3> Select an Item! </h3>                        
            </ul>
            <button>Vote!</button>
        </form>
        
   `;
};

export default class ProductForm {
    constructor(props) {
        this.items = props.items; 
        //update method to       
    }

    render() {
        function randomProductIndex(max){
            return Math.floor(Math.random() * max);
        }
        let dom = template();
        
        for(let i = 0; i < 3; i++){//gotta splice out the randomly generated thing
            let copy = this.items.slice();
            let index = randomProductIndex(copy.length);
            let randomProduct = copy[index];
            console.log(randomProduct);
            
            let ul = dom.querySelector('ul');
            let product = new Product({
                item: copy[index]
            });
            ul.appendChild(product.render());
            copy.splice(1, index);
            console.log(copy);
        }

        return dom;
    }
}