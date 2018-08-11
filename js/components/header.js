import html from '../html.js';


let template = function() {
    return html `
    <ul class="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a href="report.html">Report</a></li>
        <li><a href="products.html">Products</a></li>
    </ul>
      `;
};

export default class ShowHeader {

    constructor() {
    }

    render() {
        let dom = template();

        return dom;
    }  

}