import html from '/js/html.js';

let template = function() {
    return html`
        <h1>BUS MALL BONANZA</h1>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="results.html">Results</a></li>
        <ul>

   `;
};

export default class Header {
    constructor(props) {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}