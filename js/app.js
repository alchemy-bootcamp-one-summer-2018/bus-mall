
import html from './html.js';
import ProductImages from './survey.js';
import Header from './header.js';
import Footer from './footer.js';
import Results from './results.js';
import productsApi from './products-api.js';

let template = function() {

    return html`
<body>

    <main>
        
    </main>

</body>
    
    `;
};

export default class App {

    constructor(){
        this.products = productsApi.getRandomImages();
        this.rounds = 25;
        this.allProducts = productsApi.get();
       

    }

    renderResults() {
        while(this.main.lastElementChild){
            this.main.lastElementChild.remove();
        }

        let results = new Results ({
            products: this.products,
            allProducts: this.allProducts,
        
        });

        this.main.appendChild(results.render());
    }

    render() {
        let dom = template();
        this.main = dom.querySelector('main');
        let productImages = new ProductImages({
            products: this.products,
           
            
            onSelect:(product) => {
                // console.log('ya', this.rounds);
                productsApi.handleSelect(product.name);
                let updateProducts = productsApi.getRandomImages();
                productImages.tallyRounds(updateProducts);
                this.rounds--;

                if(!this.rounds) {
                    productImages.removeImages();
                }

                if(this.rounds === 0) {
                
                    this.renderResults();
                    
                }
            }

        });
        console.log('productlist', this.allProducts);

        let header = new Header;
        let footer = new Footer;

        this.main.appendChild(header.render());
        this.main.appendChild(productImages.render()); 
        this.main.appendChild(footer.render());
       


        return dom;
    }
    
}





