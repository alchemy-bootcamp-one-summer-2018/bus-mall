import html from '/js/html.js';

let template = function() {
    return html`
        <div></div>
   `;
};

export default class ProductReport {
    constructor(props) { 
        this.ProductReport = props.product;
       
    }

    render() {
        let dom = template();
        return dom;
    }
}