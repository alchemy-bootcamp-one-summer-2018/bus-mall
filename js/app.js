
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
        
        //this is getting data
        let threeProducts = imagesApi.getRandomImages();
        //this is creating an object and adding the properties 
        //that will be passed to the child
        
        //making the new instance and passing in the props(properties)
        let productImages = new ProductImages({
            products: this.products,
            onSelect: function(product) {
                console.log(product.name);
            }
        });

        //remove images on click
        // get more images 
        
        let header = new Header;
        let footer = new Footer;
        let results = new Results;

        //telling it to render
        main.appendChild(header.render());
        main.appendChild(productImages.render());
        
        main.appendChild(footer.render());
        main.appendChild(results.render());


        return dom;
    }
    
}





