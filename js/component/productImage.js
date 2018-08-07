import html from '../html.js';
import imagesApi from '../services/productImage-api.js';

let template = function(neededProducts) {

    return html`
    <img class="image" src=${neededProducts[1].image}>
    <img class="image" src=${neededProducts[2].image}>
    <img class="image" src=${neededProducts[3].image}>

    <img>

    `;

};

export default class showProductImages {

    render() {
        let products = imagesApi.getRandomImages();
        let dom = template(products);
        
        
        return dom;
    }
}