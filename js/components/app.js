import html from '../html.js';
import ProductSurvey from './product-survey.js';
import salesApi from '../services/sales-api.js';
import ShowHeader from '../components/header.js';
import ShowFooter from '../components/footer.js';

let template = function() {
    return html `
        <body class="wrapper">
            <header><img src="/images/busmall.png" alt="busmall logo"></header>
            <div>
            </div>
            <section class="results">
            </section>
            <footer></footer>
        </body>
      `;
};

export default class App {

    constructor() {
        this.items = salesApi.get();
    }

    render() {
        let dom = template();
        let div = dom.querySelector('div');
        this.totalClicks = 0;

        let header = dom.querySelector('header');
        let showHeader = new ShowHeader();
        header.appendChild(showHeader.render());

        let footer = dom.querySelector('footer');
        let showFooter = new ShowFooter();
        footer.appendChild(showFooter.render());
        
        let threeItems = salesApi.getRandomProducts();

        let productSurvey = new ProductSurvey({
            products: threeItems,
            // additional things that get passed down

            // onLoad:

            onSelect: (product) => {
                
                this.product = product;
                this.product.clicks++,
                console.log('this product clicks', this.product.clicks);

                this.totalClicks++;
                console.log('total clicks:', this.totalClicks);
                console.log('this.product:', this.product);

                let section = document.getElementById('products');
                while(section.children.length) {
                    section.lastChild.remove();
                }

                let randomProducts = salesApi.getRandomProducts();
                productSurvey.products = randomProducts;
                productSurvey.renderImages();
                
                console.log('three items', threeItems);
                
                if(this.totalClicks > 24) {
                    while(section.children.length) {
                        section.lastChild.remove();
                    }

                    let el = document.querySelector('section.results');
                    let msg = '<p>You\'re done voting! <a href="report.html">Click here to see results.</a></p>';
                    el.innerHTML = msg;
                    

                } 
        
            }
            
        });

        div.appendChild(productSurvey.render());

        return dom;
    }  

}
