import html from '../html.js';

let template = function() {
    return html`
    <header class="header">
        <div class="header-div">
            <h1>BusMall<h1>
        </div>
    </header>
    <nav>
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