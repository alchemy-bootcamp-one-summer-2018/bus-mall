import html from '/js/html.js';

let template = function(product) {
    return html`
        <div>
            <img src="${product.image}" width=300 height= 300 
            id=${product.id}>                
        </div>
   `;
   //use a hover listener for the event name
   //can add a mouse-down listener to depress the image to let user 
   //know they've selected it


   //refer to alchemy tv for event listeners
   //
};

export default class Product {
    constructor(props) {
        this.product = props.product;
        this.onSelect = props.onSelect;
       
    }

    render() {
        let dom = template(this.product);
        
        let div = dom.querySelector('div');
        div.addEventListener('click', () => {
            console.log('this product id', this.product.id);
            this.onSelect(this.product);
            // console.log('product selected', this.product.name);
            this.product.votes++;
            console.log(this.product.votes);

        });
        return dom;
    }
}