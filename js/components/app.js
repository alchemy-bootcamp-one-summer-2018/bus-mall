import html from '../html.js';
import ProductForm from './product-form.js'; 
import productApi from '../services/productApi.js';

let template = function() {
    return html `
        <header>
            <h1> BusMall </h1>
        </header>
        <main></main>
    `;
};
export default class App {
    
    constructor(){
        this.products = productApi.getRandomThree();
        this.rounds = 0;
    }

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        let productForm = new ProductForm({
            products: this.products
        });
        console.log(this.products);
        main.appendChild(productForm.render());
        //productApi.getRandomThree();
        return dom;  
    }
}