import html from '../html.js';
import Results from './results.js';
import salesApi from '../services/sales-api.js';
import ReportChart from '../components/report-chart.js';

let template = function() {
    return html `
        <header>
            <h1>Bus Mall</h1>
        </header>
        <body>
            <div>
            </div>
            <section class="results">
            </section>
        </body>
      `;
};

export default class App {

    constructor() {
        this.items = salesApi.get();
    }

    render() {
        let dom = template();
        let section = dom.querySelector('section.results');
        let _results = new Results();
        section.appendChild(_results.render());
        console.log('results', _results);

        let div = dom.querySelector('div');
        let reportChart = new ReportChart({
            results: this.items
        });
        div.appendChild(reportChart.render());
        
        for(let i = 0; i < this.items.length; i++) {
            
            let el = dom.getElementById('report');
            console.log('this.items', this.items);
            let results = '<p>' + this.items[i].name + ' received ' + this.items[i].clicks + ' clicks and was viewed ' + this.items[i].views + ' times.</p>';
            el.innerHTML = el.innerHTML + results;
            
        }


        return dom;
    }  

}
