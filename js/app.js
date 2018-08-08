
import html from './html.js';
import imagesApi from './products-api.js';
import ProductImages from './products.js';

let template = function() {

    return html`
    <h1>Bus Mall</h1>
  

    <main>
    </main>
    
    `;
};

export default class App {

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        
        //this is getting data
        let threeProducts = imagesApi.getRandomImages();
        //this is creating an object and adding the properties 
        //that will be passed to the child
        let productImagesProps = {
            images: threeProducts
        };
        //making the new instance and passing in the props(properties)
        let productImages = new ProductImages(productImagesProps);
    
        //telling it to render
        main.appendChild(productImages.render());

        return dom;
    }
    
}





