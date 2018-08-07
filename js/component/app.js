
import html from '../html.js';
//import imagesApi from '../services/productImage-api.js';
import ShowProductImages from './productImage.js';

let template = function() {

    return html`
    <p>helloworld</p>
    <div> </div>
  

    <main>

    </main>
    
    `;
};

export default class App {

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        

        let showProductImages = new ShowProductImages();
    
        
        main.appendChild(showProductImages.render());


        return dom;
    }
    
}





