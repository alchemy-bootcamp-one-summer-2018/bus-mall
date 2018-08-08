import html from '../html.js';

let template = function(name) {
    return html`
        <img src="/img/${name}.jpg" alt="${name}" class="${name}">
    `;

};


export default class RandomImage {
    constructor(props) {
        this.product = props.product;
        this.onClick = props.onClick;
        this.onLoad = props.onLoad;
    }
    render() {
        let dom = template(this.product.name); 
        let product = this.product.name;
        this.onLoad(this.product);


        let one = dom.querySelector('img');
        one.addEventListener('click', () => {
            console.log(product, 'was clicked');
            this.onClick(this.product);            
        });
        
        return dom;
    }
}