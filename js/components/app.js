import html from '../html.js';
import ProductForm from './product-form.js'; 

let template = function() {
    return html `
        <header>
            <h1> Bus Mall </h1>
        </header>
        <main></main>
    `;
};
export default class App {
    
    render() {
        let dom = template();
        let main = dom.querySelector('main');
        let productForm = new ProductForm();
        main.appendChild(productForm.render());

        return dom;  
    }
}