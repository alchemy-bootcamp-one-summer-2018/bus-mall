import html from '/js/html.js';

let template = function(item) {
    return html`
        <li>
            <img src="${item.image}" width=300 height= 300>
            <p></p>
            <input type="radio" id=${item.id}><label>${item.name}</label>
        
        </li>

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