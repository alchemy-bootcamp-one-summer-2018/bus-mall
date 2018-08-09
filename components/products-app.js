import html from '../html.js';
import productApi from '../services/product-api.js';
import Header from './header.js';
import IndividualImage from './individual-image.js';

let template = function() {
    return html`
        <header></header>
        <main class="image-area"></main>
   `;
};

export default class ProductsApp{
    constructor() {
        this.products = productApi.get();
    }

    render() {
        let dom = template();
        this.header = dom.querySelector('header');
        this.main = dom.querySelector('main');

        let header = new Header ({

        });

        for(let i = 0; i < this.products.length; i++) {
            let individualImage = new IndividualImage ({
                product: this.products[i]
            });
            this.main.appendChild(individualImage.render());
        }
        this.header.appendChild(header.render());
        return dom;
    }
}