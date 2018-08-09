import html from './html.js';

let template = function(images) {

    return html`

    <div class="products-area">

    <p> this is the product images </p>

    <img src=${images[0].image}>
  

    </div>

    `;

};

export default class ProductImages {

    constructor(props){ //whatever is passed from app(parent)
        this.products = props.products;
        this.images = props.images;

    }

    render() {
        
        let dom = template(this.images);
    
        console.log('this.images: ', this.images);

        
        return dom;
    }
}