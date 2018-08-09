import html from '/js/html.js';

let template = function() {
    return html`
    <footer>
    BUS MALL | THE FIRST SHOPPING EXPERIENCE OF IT'S KIND
</footer>
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