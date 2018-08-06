
import html from '../html.js';
import imageApi from '../services/image-api.js';

let template = function() {

    return html`
    <p>helloworld</p>
    <img src="">

    <main>

    </main>
    
    `;

};

export default class App {

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        
        // let images = imageApi.get();

        // let imageList = new ImageList ({
        //     images: images

        // })

        return dom;
    }
    
}





