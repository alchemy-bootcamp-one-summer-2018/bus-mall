
import html from '../html.js';
import imagesApi from '../services/productImage-api.js';
import ProductImages from './productImage.js';

let template = function() {

    return html`
    <p>helloworld</p>
    <div> </div>
  

    <main>
<div id="images-appended-here-from-productimage"> </div> // 
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





