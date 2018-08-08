import html from '/js/html.js';

let template = function() {
    return html`
         <p>This is footer</p>
   `;
};

export default class Footer {
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}