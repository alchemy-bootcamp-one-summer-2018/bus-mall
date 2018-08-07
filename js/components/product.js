import html from '/js/html.js';

let template = function() {
    return html`
        <h5>this is an image</h5>    
   `;
};

export default class Product {
    constructor(props) {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}