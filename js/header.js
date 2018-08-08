import html from '/js/html.js';

let template = function() {
    return html`

    <p>This is the nav</p>
        
   `;
};

export default class Header {
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}