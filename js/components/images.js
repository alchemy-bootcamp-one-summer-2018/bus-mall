import html from '/js/html.js';
import productList from '../../products.js';


let template = function(product) {
    return html`
      <h1>these are my images </h1>  
      <div> 
        <img src="../../assets/${product.image}"
      </div>
   `;
};

export default class Images {
    constructor(props) {
        this.products = props.products;

    }

    render() {
        const randomThree = productList.getRandomProduct();
        let dom = template(product);
        this.div = dom.querySelector('div');
        console.log('this.products', this.products);
        return dom;
    }
}