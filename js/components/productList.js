import html from '/js/html.js';
import Image from './image.js';

let template = function() {
    return html`
        <h1> this is my template </h1>
        <div></div>
   `;
};

export default class ProductList {
    constructor(props) {
        this.randomProducts = props.randomProducts;
       
    }

    renderList() {
        for(let i = 0; i < this.randomProducts.length; i++) {
            let product = new Image({
                image: this.randomProducts[i],
            });
            this.div.appendChild(product.render());
        }
    }



    render() {
        console.log('randomProducts**', this.randomProducts);
        let dom = template();
        this.div = dom.querySelector('div');

        this.renderList();

        return dom;

    }
}