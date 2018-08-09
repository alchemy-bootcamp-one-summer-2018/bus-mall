import html from './html.js';

let template = function(images) {

    return html`

    <div class="products-area">

    <p> this is the product images </p>

    <img class="image-1" src=${images.image}>
  

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
        this.div = dom//('div')
        console.log('this.images: ', this.images);

        // let img = dom.querySelector('img');
        // img.addEventListener('click', () =>{
        //     this.onSelect(this.products);
        // });

        // event listener attached to all 3
        return dom;
    }
}