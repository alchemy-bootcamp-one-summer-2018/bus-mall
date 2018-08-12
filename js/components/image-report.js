import html from '../html.js';
import ReportData from '../components/report-data.js';

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
        
        return dom;
    }
}