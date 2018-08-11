import html from '../html.js';
// import createItems from '../services/sales-api.js'; 


let template = function(neededProduct) {

    return html `
    <img src="${neededProduct.image}">
    `;
};

export default class ShowImage {

    constructor(props) {
        this.product = props.product;
        this.onSelect = props.onSelect;
    }

    render() {
        
        console.log('product:', this.product);
        let dom = template(this.product);
        
        let img = dom.querySelector('img');
        img.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        
        this.product.views++;
        console.log('this.product.views:', this.product.views);

        return dom;
    }
}   





