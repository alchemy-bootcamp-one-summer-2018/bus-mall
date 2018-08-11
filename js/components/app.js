import html from '../html.js'; 
import productApi from '../services/productApi.js';
import ProductsList from './productsList.js';
import Results from './results.js';
import Header from './header.js';
 
let template = function() {
    return html`
        <header>
        </header>
        <div></div>
            <main> 
            </main>
    `;
};


export default class App {
    constructor(){
        this.rounds = 25;
    }
    render() {
        let dom = template();
        let main = dom.querySelector('main');

        this.header = dom.querySelector('header');
        let appHeader = new Header({});       
        console.log('what header app is', appHeader.render);
        this.header.appendChild(appHeader.render());

        let products = productApi.getRandomProducts();
        let productsList = new ProductsList({
            products: products,
            onSelect:(product) => {
                productApi.handleSelect(product.name);
               
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

        
        return dom;
    
    }
}
