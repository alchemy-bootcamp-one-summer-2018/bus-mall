
import html from './html.js';
import imagesApi from './products-api.js';
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

    }

    render() {
        let dom = template();
        let main = dom.querySelector('main');
    
        let productImages = new ProductImages({
            products: this.products,
            onSelect: function(product) {
                imagesApi.handleSelect(product.name);
                let updateProducts = productsApi.getRandomImages();
                productImages.tallyRounds(updateProducts);
            
            }
        });

        
        let header = new Header;
        let footer = new Footer;
        let results = new Results;

        main.appendChild(header.render());
        main.appendChild(productImages.render());
        
        main.appendChild(footer.render());
        main.appendChild(results.render());


        return dom;
    }
    
}





