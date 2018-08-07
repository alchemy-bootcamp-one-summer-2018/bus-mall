import html from '../html.js';

let template = function() {
    return html`
        <img>
    `;
};

export default class RandomizedImage{
    constructor(props){
        this.product = props.product;
    }
    render() {
        let dom = template();
        let image = dom.querySelector('img');
        // for(let i = 0; i < displayImages.length; i++) {}
        console.log('random three images', this.product);
        image.src = this.product.image;
        return dom;
    }
}
