import html from '../html.js';

let template = function() {
    return html`
        <li>test</li>
    `;

};

export default class Result {
    constructor(props) {
        this.product = props.product;
        this.results = props.results;
    }
    render() {
        let dom = template(this.product); 
        // let product = this.product.name;
        
        return dom;
    }
}

{/* <li>${product.name} was viewed ${product.views} times and voted for ${product.votes} times</li> */}