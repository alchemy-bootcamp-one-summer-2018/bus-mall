import html from '../html.js';
import data from '../services/sales-api.js'; 


let template = function(neededProducts) {

    return html `
    <img src="${neededProducts[1].image}">
    <img src="${neededProducts[2].image}">
    <img src="${neededProducts[3].image}">
    `;
};

export default class ShowImage {

    render() {
        console.log('data:', data());
        let products = data();
        let dom = template(products);
        return dom;
    }
}   




