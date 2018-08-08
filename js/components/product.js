import html from '/js/html.js';

let template = function(item) {
    return html`
        <li>
            <img src="${item.image}" width=300 height= 300 
            id=${item.id}>                
        </li>
   `;
   //use a hover listener for the event name
   //can add a mouse-down listener to depress the image to let user 
   //know they've selected it


   //refer to alchemy tv for event listeners
   //
};

export default class Product {
    constructor(props) {
        this.item = props.item;
        this.onSelect = props.onSelect;
       
    }

    render() {
        let dom = template(this.item);
        
        let li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.item.id);
            console.log('item selected', this.item.name);
        });
        return dom;
    }
}