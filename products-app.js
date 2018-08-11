import html from '/js/html.js';

let template = function() {
    return html`
        <div>
        Hello World
        </div>
        
   `;
};

export default class ProductsApp {
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}
