import html from '../html.js';
import ProductForm from './product-form.js'; 
import items from '../productapi.js';

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
        this.items = items;
    }

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        let productForm = new ProductForm({
            items: this.items
        });
        main.appendChild(productForm.render());

        return dom;  
    }
}