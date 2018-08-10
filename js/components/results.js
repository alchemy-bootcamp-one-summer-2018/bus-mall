import html from '/js/html.js';
import ProductReport from './product-report.js';

let template = function() {
    return html`
    <h1>Report</h1>
    <ul></ul>
   `;
};

export default class Results {
    constructor(props) {
        this.results = props.results;
       
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        for(let i = 0; i < this.results.length; i++) {
            let productReport = new ProductReport({
                result: this.results[i]
            });
            ul.appendChild(productReport.render());
        }
        return dom;
    }
}