import html from '/js/html.js';

let template = function(product) {
    return html`
        <div>
            <img src="${product.image}" width=300 height= 300 
            id=${product.id}>                
        </div>
   `;
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
            this.onSelect(this.product);
            console.log(this.product.name, 'has ', this.product.votes, 'votes');
        });
        return dom;
    }
}