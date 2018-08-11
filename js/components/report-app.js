import html from '../html.js';
import Results from './results.js';
import salesApi from '../services/sales-api.js';
import ReportChart from './report-chart.js';
import ShowHeader from '../components/header.js';
import ShowFooter from '../components/footer.js';

let template = function() {
    return html `
        <body>
            <header><img src="/images/busmall.png" alt="busmall logo"></header>
            <div></div>
            <section class="results"></section>
            <footer></footer>
        </body>
      `;
};

export default class App {

    constructor() {
        this.items = salesApi.get();
    }

    render() {
        let dom = template();

        let header = dom.querySelector('header');
        let showHeader = new ShowHeader();
        header.appendChild(showHeader.render());

        let footer = dom.querySelector('footer');
        let showFooter = new ShowFooter();
        footer.appendChild(showFooter.render());

        let section = dom.querySelector('section.results');
        let _results = new Results();
        section.appendChild(_results.render());

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
