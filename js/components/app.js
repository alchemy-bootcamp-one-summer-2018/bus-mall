import html from '../html.js';
import ProductSurvey from './product-survey.js';
import Results from './results.js';
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

    render() {
        let dom = template();
        let div = dom.querySelector('div');
        this.totalClicks = 0;
        
        let items = salesApi.getRandomProducts();
        console.log('items', items);

        let productSurvey = new ProductSurvey({
            products: items,
            // additional things that get passed down
            onSelect: (product) => {
                
                this.product = product;
                this.product.clicks++,
                console.log('this product clicks', this.product.clicks);

                this.totalClicks++;
                console.log('total clicks:', this.totalClicks);

                let section = document.getElementById('products');
                while(section.children.length) {
                    section.lastChild.remove();
                }

                let randomProducts = salesApi.getRandomProducts();
                productSurvey.products = randomProducts;
                productSurvey.renderImages();
                
                if(this.totalClicks > 4) {
                    while(section.children.length) {
                        section.lastChild.remove();
                    }
                    
                    for(let i = 0; i < items.length; i++) {
                        
                        console.log('items', items);
                        
                        let el = document.getElementById('results');
                        var results = 'Tally:' + items[i].name + 'received ' + items[i].clicks + ' clicks.';
                        el.textContent = results;
                        
                        console.log('RESULTS!');
                    }

                }
                
        
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
