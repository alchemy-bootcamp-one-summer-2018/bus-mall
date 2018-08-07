import html from '../html.js';
import ProductSurvey from './product-survey.js';

let template = function() {
    return html`
      <section id="results">
        <h2>Results</h2>
            <ul>
                <li></li>
            <ul>
      </section>
    `;
};

export default class Results{
    constructor(props){
        this.products = props.products;
    }
    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        ul.textContent = this.products.length;
        return dom;
    }
}
