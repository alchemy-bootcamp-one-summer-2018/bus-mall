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
    }

    render() {
        function randomProductIndex(max){
            return Math.floor(Math.random() * max);
        }
        
        let copy = this.items.slice();
        let index = randomProductIndex(copy.length);
        let randomProduct = copy[index];
        console.log(randomProduct);

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