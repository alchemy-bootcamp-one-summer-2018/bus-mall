import html from '../html.js';
import ProductForm from './product-form.js'; 
import productapi from '../services/productapi.js';

let template = function() {
    return html `
        <header>
            <h1> Bus Mall </h1>
        </header>
        <main></main>
    `;
};
export default class App {
    
    constructor(){
        this.products = productapi.get();
    }

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        let productForm = new ProductForm({
            products: this.products
        });
        main.appendChild(productForm.render());

        return dom;  
    }
}