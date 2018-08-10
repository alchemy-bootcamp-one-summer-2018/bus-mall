import html from '/js/html.js';

let template = function() {
    return html`
        <p>I'm a footer!</p>

   `;
};

export default class Header {
    constructor(props) {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}