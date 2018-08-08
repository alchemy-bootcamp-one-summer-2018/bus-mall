import html from '/js/html.js';
import Result from './result.js';

let template = function() {
    return html`
        <h2>Voting Results</h2>
        <ul></ul>
    `;
};

export default class Report {
    constructor(props) {
        this.products = props.products;
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        
        for(let i = 0; i < this.products.length; i++) {
            let result = new Result ({
                product: this.products[i]
            });
            ul.appendChild(result.render());
        }
        
        return dom;
    }
}