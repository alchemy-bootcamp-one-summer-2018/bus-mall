import html from '/js/html.js';

let template = function(product) {
    return html`
        <l1>
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
        </li>
   `;
};

export default class Product {
    constructor(props) {
        this.product = props;
    }

    render() {
        let dom = template(this.product);
        this.li = dom.querySelector('li');
        
        return dom;
    }
}