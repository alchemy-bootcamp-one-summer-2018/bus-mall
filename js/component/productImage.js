import html from '../html.js';
import imageData from '../services/productImage-api.js';

let template = function(neededProducts) {

    return html`
    <img src=${neededProducts[1].image}>
    <img src=${neededProducts[2].image}>
    <img src=${neededProducts[3].image}>

    <img src="images/" id="image">

    `;

};

export default class imageSelection {
    

    render() {
        let products = imageData();
        let dom = template(products);
        //let randomImages = randomImages();
        
        return dom;
    }
}