import html from '../html.js';

let template = function(product) {
    return html`
    <li><span class="product-name">${product.name}</span><br>  views: ${product.views} votes: ${product.votes}</li>
    `;

};

export default class Result {
    constructor(props) {
        this.product = props.product;
    }
    
    render() {
        let dom = template(this.product); 
        
        return dom;
    }
}
