import html from '../html.js';

let template = function(product) {
    return html`
    <div class="image-container">    
        <img src="/img/${product.name}.jpg" alt="${product.name}" class="${product.name}">
        <p>Name: ${product.name}</p>
        <p>Views: ${product.views}</p>
        <p>Votes: ${product.votes}</p>
    </div>
    `;

};

export default class ProductImage {
    constructor(props) {
        this.product = props.product;

    }

    render() {
        let dom = template(this.product);
        
        return dom;
    }
}