import html from '../html.js';
import RandomizedImage from './randomized-image.js';

let template = function() {
    return html`
      <section id="product-survey">
        <h2>Product Survey</h2>
        <section id="randomized-images"></section>
      </section>
    `;
};

export default class ProductSurvey{
    constructor(props){
        this.products = props.products;
    }
    render() {
        let dom = template();
        let randomizedImagesSection = dom.getElementById('randomized-images');
        for(let i = 0; i < this.products.length; i++) { 
            let randomizedImage = new RandomizedImage({
                product: this.products[i]
            });
            randomizedImagesSection.appendChild(randomizedImage.render());
        }
        return dom;
    }
}
