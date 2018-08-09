import html from '/js/html.js';
import Products from '/js/products.js';

let template = function() {
    return html`
        <ul></ul>
   `;
};

export default class ProductsList {
    constructor(props) {
        this.product = props;
       
    }

    renderProducts(product) {
        let productCard = new Product(product);
        this.ul.appendChild(productCard).render());
        
    render(){

        let products =

        //for loop
    }
    let dom = template();

      
        return dom;
    }
}