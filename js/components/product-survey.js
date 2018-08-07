import html from '../html.js';
import ShowImage from './image-display-app.js';

let template = function() {

    return html `
    <section><h2>Vote for your favorite product:</h2></section>
    `;
};

export default class ProductSurvey {

    constructor(props) { // catches things from the parent
        this.products = props.products;
        this.handleClick = props.handleClick;
    }
    
    render() {
        // console.log('ShowImage:', createItems()); //this used to be data
        // let products = createItems();
        let dom = template(); //(products)
        let section = dom.querySelector('section');
        
        for(let i = 0; i < 3; i++) {
            let showImage = new ShowImage({ // anything you put inside this class constructor is passed down to the child
                product: this.products[i],
                onSelect: (product) => {
                    this.product = product;
                    this.product.clicks++,
                    console.log('clicks', this.product.clicks);
                }
            });
            section.appendChild(showImage.render());
        }

        return dom;
    }


}   


