import html from '../html.js';
import imageData from '../services/image-api.js';

let template = function(neededProducts) {

    return html`

    <img src=${neededProducts[1].image}>

    `;

};

export default class imageSelection {
    

    render() {
        let products = imageData();
        let dom = template(products);
        
        return dom;
    }
}