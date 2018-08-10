
import html from './html.js';
import ProductImages from './products.js';
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
       

    }

    renderResults() {
        while(this.main.lastElementChild){
            this.main.lastElementChild.remove();
        }

        let results = new Results ({
            products: this.products

        });

        this.main.appendChild(results.render());
    }

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        let productImages = new ProductImages({
            products: this.products,
            
            onSelect:(product) => {
                console.log('ya', this.rounds);
                productsApi.handleSelect(product.name);
                let updateProducts = productsApi.getRandomImages();
                productImages.tallyRounds(updateProducts);
                this.rounds--;

                if(!this.rounds) {
                   
                    productImages.removeImages();
            
                }
            }

        });

        
        let header = new Header;
        let footer = new Footer;
        //let results = new Results;

        main.appendChild(header.render());
        main.appendChild(productImages.render());
        
        main.appendChild(footer.render());
        // resultSection.appendChild(results.render());


        return dom;
    }
    
}





