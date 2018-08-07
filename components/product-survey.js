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
        this.lastThreeProducts = [];
        this.displayThreeImages = [];
        this.totalClicks = 0;
    }
    
    getThreeRandomProduct() {

        // Get last three products displayed
        this.lastThreeProducts.push(...this.displayThreeImages);
        this.displayThreeImages = [];
        
        while(this.displayThreeImages.length < 3) {
            console.log('length', this.displayThreeImages.length);
            //get random index
            let randomIndex = Math.floor(Math.random() * this.products.length);

            //goes into products, takes out object at random index
            let selectedProduct = this.products.splice(randomIndex, 1)[0];

            //pushes random index into currently displayed image 
            this.displayThreeImages.push(selectedProduct);
            console.log('are you here', selectedProduct.views);
            //track views?

        }

        // Add previously displayed products back into random pool
        this.products.push(...this.lastThreeProducts);
        this.lastThreeProducts = [];

        console.log('display-images', this.displayThreeImages);

        return this.displayThreeImages;
    }
    clearImages() {
        let section = this.randomizedImagesSection;
        while(section.lastElementChild) {
            section.lastElementChild.remove();
        }
    }

    renderImages() {
        //get initial three to show
        let randomProducts = this.getThreeRandomProduct();
        //loop through products and create randomized image object for each
        for(let i = 0; i < randomProducts.length; i++) {
            
            
            //passing product that was picked
            let randomizedImage = new RandomizedImage({
                product: randomProducts[i],
                view: randomProducts[i].views++,
                //attach click handler that checks against total clicks
                //and modifies count property for individual product onClick.
                //todo refresh dom on image click to show new list of three products
                clickHandler: () => {
                    if(this.totalClicks < 25) {
                        randomProducts[i].count++;
                        console.log(randomProducts[i]);
                        this.totalClicks++;
                        console.log('total clicks', this.totalClicks);
                        this.clearImages();
                        this.renderImages();
                    }
                }
            });
            this.randomizedImagesSection.appendChild(randomizedImage.render());
        }
    }
    //initialization
    render() {
        let dom = template();
        //where add image
        this.randomizedImagesSection = dom.getElementById('randomized-images');
        this.renderImages();
        return dom;
    }
}
