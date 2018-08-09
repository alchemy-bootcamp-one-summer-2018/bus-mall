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
        this.images = props.images;

    }

    render() {
        //

        let dom = template(this.images);
        let div = dom.querySelector('div');
       
        
        for(let i = 0; i < 3; i++) {
            let product = new Product();
            div.appendChild(product.render());
  
        }

    
        
        // console.log('this.images: ', this.images);

        
        return dom;
    }
}