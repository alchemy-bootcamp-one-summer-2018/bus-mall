import html from '../html.js';
import ProductForm from './product-form.js'; 
import productApi from '../services/productApi.js';
import ResultsHolder from './resultsHolder.js';

let template = function() {
    return html `
        <header>
            <h1> BusMall </h1>
        </header>
        <main></main>
        <section></section>
    `;
};
export default class App {
    
    constructor(){
        this.products = productApi.getRandomThree();
        this.allProducts = productApi.get();
        this.rounds = 3;
    }

    renderResults(){
        let dom = template();
        let section = dom.querySelector('section');

        let resultsHolder = new ResultsHolder({
            products: this.allProducts
        });
        console.log('look at me i\'m rendering results');
        
        section.appendChild(resultsHolder.render());

    }
    
    render() {
        let dom = template();
        let main = dom.querySelector('main');
        
        let productForm = new ProductForm({
            products: this.products,
           
            onSelect: (product) => {
                this.rounds--;
                console.log('you have ', this.rounds, 'rounds left!');
                productApi.handleSelect(product.id);
                let updateProducts = productApi.getRandomThree();
                productForm.updateForm(updateProducts);

                if(!this.rounds) {
                    productForm.removeImages();
                    this.renderResults();
                }               
            }
        });

        main.appendChild(productForm.render());
        
        return dom;  
    }

}