import html from '../html.js';

let template = function(product) {
    return html`
        <p>${product.name} was viewed ${product.views} times and voted for ${product.votes} times</p>
    `;

};

export default class ResultsArea {
    constructor(props) {
        this.product = props.product;
        this.showResults = props.showResults;
    }
    render() {
        let dom = template(this.product); 
        // let product = this.product.name;
        
        return dom;
    }
}