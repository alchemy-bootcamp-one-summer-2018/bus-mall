import html from '../html.js';

let template = function() {
    return html`
        <h1>BusMall<h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="results.html">Results</a></li>
                <li><a href="products.html">Products</a></li>
            </ul>
                
   `;
};

export default class Header {

    render() {
        let dom = template();
        return dom;
    }
}