import html from './html.js';
import Product from './product.js';

let template = function() {

    return html`

    <div class="products-area">

    <p> this is the product images </p>

  
    </div>

    `;

};

export default class ProductImages {

    constructor(props){ //whatever is passed from app(parent)
        this.products = props.products;
        
    }

    render() {

        let dom = template();
        
        for(let i = 0; i < 3; i++) {

            let div = dom.querySelector('div');
            let product = new Product({
                product: this.products[i] 
            });

            div.appendChild(product.render());


        
        // console.log('this.images: ', this.images);

        }
        return dom;
    
    }
}