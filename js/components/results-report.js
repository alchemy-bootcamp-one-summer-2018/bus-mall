import html from '/js/html.js';
import Result from './result.js';
import ReportChart from './report-chart.js';

let template = function() {
    return html`
        <h2 class="voting-h2">Voting Results</h2>
        <ul class="ul"></ul>
        <section class="chart"></section>
    `;
};

export default class Report {
    constructor(props) {
        // this.products = props.products;
        this.results = props.results;
    }

    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        let chart = dom.querySelector('.chart');
        
        for(let i = 0; i < this.results.length; i++) {
            let result = new Result ({
                product: this.results[i]
            });
            ul.appendChild(result.render());
        }
        
        let reportChart = new ReportChart({
            results: this.results
        });
        chart.appendChild(reportChart.render());

        return dom;
    }
}