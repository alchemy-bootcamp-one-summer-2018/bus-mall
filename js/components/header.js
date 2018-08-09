import html from '../../js/html.js';

let template = function() {
    return html`
    <h1>Bus Mall</h1>
    <nav>
        <a href="index.html">Product Voting</a>
        <a href="results.html">Results</a>
        <a href="products.html">Products</a>
    </nav>

   `;
};
export default class Footer{
    constructor(props) {
       
    }
    render() {
        let dom = template();
        return dom;
    }
}
