import html from './html.js';
import Product from './product.js';
// import productsApi from './products-api.js';

let template = function(){

    return html`

    <div class="products-area">

    </div>

    `;

};

export default class ProductImages {

    constructor(props){ //whatever is passed from app(parent)
        this.products = props.products;
        this.onSelect = props.onSelect;
        this.rounds = props.rounds;
    }

    removeImages() {

        while(this.div.children.length) {
            this.div.lastChild.remove();
        }

    }

    tallyRounds(products) {

        this.removeImages();
        this.products = products;
        for(let i = 0; i < 3; i++) {
            let product = new Product({
                product: this.products[i],
                onSelect: this.onSelect,
            });
        
            this.div.appendChild(product.render());

        }

    }

    render() {

        let dom = template();
        this.div = dom.querySelector('div');
        
        for(let i = 0; i < 3; i++) {
            let product = new Product({
                product: this.products[i],
                onSelect: this.onSelect,
            });
        
            this.div.appendChild(product.render());

        }

        return dom;
    
    }
}