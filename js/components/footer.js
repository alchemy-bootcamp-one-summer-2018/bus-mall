import html from '../html.js';


let template = function() {
    return html `
    <p></p>
      `;
};

export default class ShowFooter {

    constructor() {
    }

    render() {
        let dom = template();

        return dom;
    }  

}