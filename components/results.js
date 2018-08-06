import html from '../html.js';

let template = function() {
    return html`
      <section id="results">
        <h2>Results</h2>
      </section>
    `;
};

export default class Results{
    constructor(props){

    }
    render() {
        let dom = template();
        return dom;
    }
}
