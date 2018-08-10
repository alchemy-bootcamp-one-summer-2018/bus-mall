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
        this.rounds = 25;
    }
    
    render() {
        // console.log(this.products);
        let dom = template();
        let main = dom.querySelector('main');
        
        let productForm = new ProductForm({
            products: this.products,
           
            onSelect: (product) => {
                this.rounds--;
                console.log('you have ', this.rounds, 'rounds');
                productApi.handleSelect(product.id);
                let updateProducts = productApi.getRandomThree();
                // console.log('new products', updateProducts);
                productForm.updateForm(updateProducts);

                if(!this.rounds) {
                    productForm.removeImages();
                }
               
            }
        });
 
        main.appendChild(productForm.render());
        
        return dom;  
    }

}