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
    //add a click event listener to main 
    //that will render a new set of images
    render() {
        let dom = template();
        let main = dom.querySelector('main');
        
        let productForm = new ProductForm({
            products: this.products,
            onSelect: function(product) {
                console.log('app product id', product.id);
                productApi.handleSelect(product.id);
                let updateProducts = productApi.getRandomThree();
                productForm.tallyRounds(updateProducts);
            }
        });
        
        console.log(this.products);
        main.appendChild(productForm.render());
        // productApi.getRandomThree();
        return dom;  
    }

}