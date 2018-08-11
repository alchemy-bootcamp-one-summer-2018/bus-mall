import html from '../html.js';

let template = function() {
    return html`
        <h1> Welcome to Bus Mall Product Survey!<h1>
        <section></section>
        <nav>
        <ul>
            <li><a href="products.html">Products</li>
            <li><a href="results.html">Results</li>
         </ul>
       </nav>
   `;
};

export default class Header {
    

    render() {
        let dom = template();
        return dom;
    }
}