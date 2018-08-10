import html from '/js/html.js';
//import App from './app.js';

let template = function(product) {
    return html`
        <li>
            <h3>${product.name}</h3>
            <img src="${product.image}">
        </li>
   `;
};

export default class Product {
    constructor(props) {
        this.product = props.product;
        this.onSelect = props.onSelect;
    }

    render() {
        console.log('this.product', this.product);
        let dom = template(this.product);

        this.li = dom.querySelector('li');
        //console.log('this product:', this.product);

        //let li = dom.querySelector('li');
        this.li.addEventListener('click', () => {
            console.log('click', this.product);
            this.onSelect(this.product);
        });
    


        return dom;
    }
}