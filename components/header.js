import html from '../html.js';

let template = function() {
    return html`
    <nav>
        <h1 id="title">BusMall<h1>
        <div class="menu-content">
            <a href="index.html">Home</a>
            <a href="results.html">Results</a>
            <a href="products.html">Products</a>
        </div>
    </nav>
                
   `;
};

export default class Header {

    render() {
        let dom = template();
        return dom;
    }
}