
import html from '/js/html.js';
import Header from '/js/components/header.js';
import Footer from '/js/components/footer.js';
//import products from '../products.js';


let template = function() {
    return html`
    <div>
    <header>Products</header>
    <footer></footer>
    </div>

`;  
};
//console.log('hello world');
export default class ProductsApp {
    render() {
        let dom = template();
        this.div = dom.querySelector('div'); 
        this.header = dom.querySelector('header');
        this.footer = dom.querySelector('footer');
        console.log(this.header, 'header');

        const header = new Header();
        const footer = new Footer();

        this.header.appendChild(header.render());
        this.footer.appendChild(footer.render());

        //this.div.appendChild(render(tally));
        return dom;


    }
}