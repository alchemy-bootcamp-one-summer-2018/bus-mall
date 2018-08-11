import html from '/js/html.js';

import Header from '/js/components/layout/header.js';
import Footer from '/js/components/layout/footer.js';

import productApi from '/js/services/product-api.js';
import ChartBox from '/js/components/boxes/chart-box.js';
// import ResultCard from '/js/components/parts/result-card.js';

let template = function() {
    return html`        
        <header class="header-container"></header>
        
        <main>
            <h2>Charty McCharty Chart</h2>
            <section>
                <div class="chart-box"></div>
                <ul class="results-box"></ul>
            </section>
        </main>

        <footer></footer>
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

        this.header = dom.querySelector('header');
        this.footer = dom.querySelector('footer');
        let header = new Header();
        let footer = new Footer();
        this.header.appendChild(header.render());
        this.footer.appendChild(footer.render());

        this.chartBox = dom.querySelector('.chart-box');
    
        this.renderChart(productApi.get());

        

        return dom;
    }
}

