import html from '/js/html.js';

let template = function() {
    return html`
        <p> 2018 Sophie </p>
   `;
};


export default class Header{
    constructor(props) {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}




