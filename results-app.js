
import html from '/js/html.js';
import Header from '/js/components/header.js';
import Footer from '/js/components/footer.js';
import ProductReport from './productReport.js';
//import products from '../products.js';


let template = function() {
    return html`
    <div>
    <header>Results</header>
    <footer></footer>
    </div>

`;    
};
//console.log('hello world');
export default class ResultsApp {
    constructor(props) {
        this.results = props.results;
    }

    render() {
        let dom = template();
        this.div = dom.querySelector('div'); 
        this.header = dom.querySelector('header');
        this.footer = dom.querySelector('footer');
        console.log(this.header, 'header');

        for(let i = 0; i < this.results.length; i++) {
            let productReport = new ProductReport({
                product: this.results[i]
            });
            this.div.appendChild(productReport.render());
        }
        const header = new Header();
        const footer = new Footer();

        this.header.appendChild(header.render());
        this.footer.appendChild(footer.render());
        

        //this.div.appendChild(render(tally));
        return dom;


    }
}