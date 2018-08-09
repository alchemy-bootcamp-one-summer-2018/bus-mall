import html from './html.js';



let template = function(product) {
    return html`

    <img src="${product.image}" width=200px; height=200px>
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

