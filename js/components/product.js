import html from '/js/html.js';

let template = function(item) {
    return html`
        <li>this is ${item.name} and
        it looks like <img src="${item.image}"</li>

   `;
};

export default class Product {
    constructor(props) {
        this.item = props.item;
       
    }

    render() {
        let dom = template(this.item);
        return dom;
    }
}