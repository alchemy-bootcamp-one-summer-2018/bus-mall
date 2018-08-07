import html from '../html.js';
import ShowImage from './image-display-app.js';

let template = function() {

    return html `
    <section><h2>Vote for your favorite product:</h2></section>
    `;
};

export default class ProductSurvey {

    constructor(props) {
        this.products = props.products;
    }
    
    render() {
        // console.log('ShowImage:', createItems()); //this used to be data
        // let products = createItems();
        let dom = template(); //(products)
        let section = dom.querySelector('section');
        
        for(let i = 0; i < 3; i++) {
            let showImage = new ShowImage({
                product: this.products[i]
            });
            section.appendChild(showImage.render());
        }

        return dom;
    }


}   


