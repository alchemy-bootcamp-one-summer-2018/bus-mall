import html from '/js/html.js';

let template = function(product) {
    return html`
        
            <li>Product ${product.id}, ${product.name},
            had ${product.votes} votes on ${product.viewed} viewings
            </li>
        
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
