import html from './html.js';



let template = function(product) {
    return html`



    <img class="products" src="${product.image}">


    `;
};

export default class Product {
    constructor(props) {
        this.product = props.product;
        this.onSelect = props.onSelect;

    }
    
    render() {
        let dom = template(this.product);
        this.img = dom.querySelector('img');
    
        this.img.addEventListener('click', () => this.onSelect(this.product));

        return dom;
    }
}

