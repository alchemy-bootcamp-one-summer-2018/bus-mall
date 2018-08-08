import html from '../html.js';
import ProductSurvey from './product-survey.js';
import Results from './results.js';
// import getRandomImage from '../services/sales-api.js';
import salesApi from '../services/sales-api.js';

let template = function() {
    return html `
        <header>
            <h1>Bus Mall</h1>
        </header>
        <body>
            <div>
            </div>
            <section class="results">
            </section>
        </body>
      `;
};

export default class App {

    // constructor(props) {
    //     this.section = props.section;
    // }

    render() {
        let dom = template();
        let div = dom.querySelector('div');
        this.totalClicks = 0;
        
        let items = salesApi.getRandomProducts();
        console.log('items', items);

        let productSurvey = new ProductSurvey({
            products: items,
            // additional things that get passed down -- handleClick - everytime we get a click...
            onSelect: (product) => {
                
                this.product = product;
                this.product.clicks++,
                console.log('clicks', this.product.clicks);
                this.totalClicks++;
                console.log('total clicks:', this.totalClicks);

                let section = document.getElementById('products');
                while(section.children.length) {
                    section.lastChild.remove();
                }

                let randomProducts = salesApi.getRandomProducts();
                productSurvey.products = randomProducts;
                productSurvey.renderImages();
                console.log('second round of random products', randomProducts);
                
                if(this.totalClicks > 4) {
                    console.log('RESULTS!');
                }

                // this.onSelect(this.product);
                console.log('hello');
                
            }
            
        });
        
        

        div.appendChild(productSurvey.render());

        let section = dom.querySelector('section.results');
        let results = new Results();
        section.appendChild(results.render());
        console.log('results', results);

        return dom;
    }  

}
