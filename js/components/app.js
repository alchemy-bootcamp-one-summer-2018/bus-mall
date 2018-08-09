import html from '../html.js'; 
import productApi from '../services/productApi.js';
import ProductsList from './productsList.js';
import Results from './results.js';
 
let template = function() {
    return html`
        <header>
            <h1 class="firstHeader"> Bus Mall</h1>
        </header>
        <div class="flex-container"></div>
            <main> 
            </main>
    `;
};


export default class App {
    constructor(){
        this.rounds = 5;
    }
    render() {
        let dom = template();
        let main = dom.querySelector('main');

        let products = productApi.getRandomProducts();
        console.log('is this working', products);
        let productsList = new ProductsList({
            products: products,
            onSelect:(product) => {
                productApi.handleSelect(product.name);
                //increase clicks
                //generate new products
                //updates
                this.rounds--;
                if(this.rounds === 0){
                    let results = new Results({
                        results: productApi.get()
                    });
                    main.appendChild(results.render());
                }
                productsList.update(productApi.getRandomProducts());
                
            }
        });
        main.appendChild(productsList.render());
        
        console.log(products);
        return dom;
    
    }
}
