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
    }
    
    render() {
        // console.log('ShowImage:', createItems()); //this used to be data
        // let products = createItems();
        let dom = template(this.product); //(products)
        return dom;
    }
}   






