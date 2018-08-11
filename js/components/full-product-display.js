import html from '../html.js';
// import createItems from '../services/sales-api.js'; 


let template = function(neededProduct) {

    return html `
    <img src="${neededProduct}">
    `;
};

export default class ShowAllImages {

    constructor(props) {
        this.product = props.product;
    }

    render() {
        
        console.log('product:', this.product);
        let dom = template(this.product);

        return dom;
    }
}   