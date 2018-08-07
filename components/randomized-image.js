import html from '../html.js';

let template = function() {
    return html`
        <img>
    `;
};

export default class RandomizedImage{
    constructor(props){
        this.product = props.product;
        this.clickHandler = props.clickHandler;
    }

    render() {
        let dom = template();
        let image = dom.querySelector('img');
        image.addEventListener('click', this.clickHandler);
        console.log('random three images', this.product);
        image.src = this.product.image;
        return dom;
    }
}
