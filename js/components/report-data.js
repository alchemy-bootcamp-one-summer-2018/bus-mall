import html from '../html.js';

let template = function(report) {
    return html`
        <h5>${report.name} has been displayed ${report.count} times, and has been selected ${report.selected} times!</h5>
   `;
};

export default class ReportData {
    constructor(props) {
        this.report = props.report;
    }

    render() {
        let dom = template(this.report);
        console.log('What is this?', this.report);

        

        return dom;
    }
}