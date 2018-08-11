import html from '/js/html.js';

let template = function() {
    return html`
        <img src="/assets/favicon.png" width="72">
        <p> &copy; 2018 Bus Mall - All Rights Reserved</p>

   `;
};

export default class Footer {

    render() {
        let dom = template();
        return dom;
    }
}