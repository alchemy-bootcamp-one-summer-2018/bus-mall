import html from '/js/html.js';

let template = function(product) {
    let name = product.name;
    let views = product.views;
    let votes = product.votes;

    return html`
        
        <li>${name} had ${views} and ${votes}</li>
   `;
};

export default class ProductResults {
    constructor(props) {
        this.product = props.product;
       
    }

    render() {
        let dom = template(this.product);
        return dom;
    }
}