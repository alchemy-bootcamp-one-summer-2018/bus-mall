import html from '../html.js';
import salesApi from '../services/sales-api.js';
import ShowHeader from '../components/header.js';
import ShowFooter from '../components/footer.js';
import ShowAllImages from '../components/full-product-display.js';


let template = function() {
    return html `
    <body>
        <header><img src="/images/busmall.png" alt="busmall logo"></header>
        <div></div>
        <section></section>
        <footer></footer>
    </body>
      `;
};

export default class ProductsApp {

    constructor() {
        this.items = salesApi.get();
        // this.product = props.product;
    }

    render() {
        let dom = template();

        let header = dom.querySelector('header');
        let showHeader = new ShowHeader();
        header.appendChild(showHeader.render());

        let footer = dom.querySelector('footer');
        let showFooter = new ShowFooter();
        footer.appendChild(showFooter.render());

        for(let i = 0; i < this.items.length; i++) {
            console.log('THIS.ITEMS', this.items[i].image);
            let section = dom.querySelector('section');
            let itemImages = this.items[i].image;
            let showAllImages = new ShowAllImages({
                product: itemImages
            });
            section.appendChild(showAllImages.render(itemImages));
        }
        


        return dom;
    }  

}
