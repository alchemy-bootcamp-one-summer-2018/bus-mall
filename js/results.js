import html from '/js/html.js';
import ProductResults from '/js/product-results.js';


let template = function() {
    return html`
        <p> Results </p>

        <ul> </ul>

        <section> </section>  
   `;
};

export default class Results {
    constructor(props) {
        this.results = props.results;
        this.allProducts = props.allProducts;
       
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        console.log('DO YOU WORK', this.allProducts);

        for(let i = 0; i < this.allProducts.length; i++) {
            let productResults = new ProductResults({
                product: this.allProducts[i]

            });
            
            ul.appendChild(productResults.render());

        }
        return dom;
    }
}