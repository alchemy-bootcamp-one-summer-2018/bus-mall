import html from '../html.js';

let template = function() {
    return html `
        <div>
            <h2>Results</h2>
        </div>
      `;
};

export default class Results {

    render() {
        let dom = template();
        return dom;
    }
}   