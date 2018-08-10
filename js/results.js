import html from '/js/html.js';
import ProductResults from '/js/product-results.js';


let template = function() {
    return html`

        <ul> </ul>

        <section> </section>  
   `;
};

export default class Results {
    constructor(props) {
        this.results = props.results;
       
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        console.log('DO YOU WORK', this.results);

        for(let i = 0; i < this.results.length; i++) {
            let productResults = new ProductResults({

                product: this.results[i]

            });
            ul.appendChild(productResults.render());

            return dom;
        }
    }
}