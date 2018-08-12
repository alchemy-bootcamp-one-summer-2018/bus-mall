import html from '/js/html.js';
import Result from './result.js';

let template = function() {
    return html`
        <div>
            <h2>Voting Results</h2>
        </div>        
   `;
};

export default class ResultsHolder {
    constructor(props) {
        this.products = props.products;
    }

    render() {
        let dom = template();
        for(let i = 0; i < this.products.length; i++){          
            
            this.div = dom.querySelector('div');
            
            let result = new Result({
                product: this.products[i],
            });
            this.div.appendChild(result.render());
        }
        return dom;
    }
}