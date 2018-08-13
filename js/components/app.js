
import html from '/js/html.js';
import Header from '/js/components/header.js';
import Footer from '/js/components/footer.js';
import ProductList from './productList.js';
import products from '../../products.js';

let template = () => {
    return html`
    <div>
    <header></header>
    <main></main>
    <footer></footer>
    </div>

`;    
};
//console.log('hello world');
export default class App {
    constructor() {
        this.randomProducts = products.getRandomProducts();
    }
    
    render() {
        let dom = template();
        this.div = dom.querySelector('div'); 
        this.header = dom.querySelector('header');
        this.footer = dom.querySelector('footer');
        this.main = dom.querySelector('main');

        const header = new Header();
        let productList = new ProductList({
            randomProducts: this.randomProducts,
            onSelect: (product) => {
                //let randomProducts = this.randomProducts(product => product.name === product);
                product[0].votes ++;
                console.log('product', product);

            }
        });
       
        const footer = new Footer();

        this.header.appendChild(header.render());
        this.footer.appendChild(footer.render());

        this.main.appendChild(productList.render());
        return dom;
        
            
    }
}