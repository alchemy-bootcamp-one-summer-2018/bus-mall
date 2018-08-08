import html from '../html.js';

let template = function() {
    return html`        
            <header>
                <h1>Bus Mall</h1>
            </header>
            <nav>
                <a id="index" href="../../index.html">Market Research</a>
                <a id="results" href="../../results.html">Results</a>
                <a id="products" href="../../products.html">Products</a>
            </nav>
    `;
};

export default class Header {
    constructor() {

    }

    render() {
        let dom = template();
        
        return dom;
    }
}