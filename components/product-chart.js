import html from '../html.js';

let template = function() {
    return html`
        <h2>Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
};

export default class ProductChart {
    constructor(props) {
        this.products = props.products;
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let count = [];
        let views = [];

        for(let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            labels.push(product.name);
            count.push(product.count);
            views.push(product.views);
        }

        return dom;
    }
}