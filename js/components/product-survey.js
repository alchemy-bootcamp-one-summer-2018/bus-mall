import html from '../html.js';
import ShowImage from './image-display-app.js';
// import salesApi from '../services/sales-api.js';

// import getRandomProducts from '../services/sales-api.js';

let template = function() {

    return html `
    <h2>Vote for your favorite product:</h2>
        <section id="products">  
        </section>
    `;
};

export default class ProductSurvey { 

    constructor(props) { // catches things from the parent
        this.products = props.products;
        this.onSelect = props.onSelect;
        this.handleClick = props.handleClick;
    }
    
    render() {
        // console.log('ShowImage:', createItems()); //this used to be data
        // let products = createItems();
        let dom = template(); //(products)
        this.section = dom.querySelector('section');
        
        console.log('this.section', this.section);

        this.renderImages();
        
        return dom;
    }

    renderImages() {
        for(let i = 0; i < 3; i++) {
            let showImage = new ShowImage({ // anything you put inside this class constructor is passed down to the child
                product: this.products[i],
                onSelect: this.onSelect
            });             
                        
            this.section.appendChild(showImage.render());
        }
    }
}

   



