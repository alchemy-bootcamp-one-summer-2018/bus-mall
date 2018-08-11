import html from '../html.js';

let template = function() {
    return html `
        <h2>Results</h2>
        <div id="report"></div>
      `;
};

export default class Results {

    render() {
        let dom = template();
        return dom;
    }
}   