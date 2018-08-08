import html from '../html.js';

let template = function(name) {
    return html`
    <div class="image-container">    
        <img src="/img/${name}.jpg" alt="${name}" class="${name}">
    </div>
    `;

};

export default class ProductImage {
    constructor(props) {
        this.product = props.product;

    }

    render() {
        let dom = template(this.product.name);
        
        return dom;
    }
}