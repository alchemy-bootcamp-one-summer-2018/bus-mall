import html from '/js/html.js';

import productApi from '/js/services/product-api.js';
import ChartBox from '/js/components/boxes/chart-box.js';
// import ResultCard from '/js/components/parts/result-card.js';

let template = function() {
    return html`        
        <header>
            <h1>Charty McCharty Chart</h1>
        </header>
        
        <main>
            <section>
                <div class="chart-box"></div>
                <ul class="results-box"></ul>
            </section>
        </main>
    `;
};

export default class App {

    constructor() {
        this.test = 'I a placeholder';
    }

    renderChart(products) {
        let chartBox = new ChartBox({
            products: products,
        });

        this.chartBox.appendChild(chartBox.render());
        
    }
    
    render() {
        let dom = template();
        this.chartBox = dom.querySelector('.chart-box');
    
        this.renderChart(productApi.get());

        

        return dom;
    }
}

