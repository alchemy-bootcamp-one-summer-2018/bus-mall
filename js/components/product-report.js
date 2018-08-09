import html from '/js/html.js';

let template = function(result) {
    let name = result.name;
    let count = result.numberClicks;
    let view = result.viewCount;

    return html`
    <li>${name} has ${count} and ${view}</li>
        
   `;
};

export default class {
    constructor(props) {
        this.result = props.result;
    }

    render() {
        let dom = template(this.result);
        return dom;
    }
}