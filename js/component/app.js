
import html from '../html.js';
import createImages from '../services/image-api.js';
import ImageSelection from './imageSelection.js';

let template = function() {

    return html`
    <p>helloworld</p>
    <div> </div>
    <img src="">

    <main>

    </main>
    
    `;
};

export default class App {

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        
        let images = createImages();
        console.log(images);

        let imageSelection = new ImageSelection();
        main.appendChild(imageSelection.render());

        // let imageData = new ImageData ({
        //     images: images

        // });

        return dom;
    }
    
}





