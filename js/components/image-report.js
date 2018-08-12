import html from '../html.js';
import ReportData from '../components/report-data.js';
import ReportChart from './report-chart.js';

let template = function() {
    return html`
        <h2>Derp Report</h2>
        <section></section>
   `;
};

export default class ImageReport{
    constructor(props) {
        this.results = props.report;
    }

    render() {
        let dom = template();
        let section = dom.querySelector('section');
        console.log('Almost there?', this.results);

        for(let i = 0; i < this.results.length; i++) {
            let reportData = new ReportData({
                report: this.results[i]
            });
            section.appendChild(reportData.render());
        }

        let reportChart = new ReportChart({
            report: this.results
        });
        section.appendChild(reportChart.render());
        
        return dom;
    }
}