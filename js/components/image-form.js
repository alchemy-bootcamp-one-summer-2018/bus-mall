import html from '../html.js';
import imageLoading from '../data-wrangling/data.js';

let foo = imageLoading();

let template = function() {
    return html`        
        <div class="row">
            <div class="column">${foo[0].src}</div>
            <div class="column">${foo[1].src}</div>
            <div class="column">${foo[2].src}</div>
        </div>
        <section class="buttons">
            <div class="row">
                <div class="column"><input type="radio" name="clickMe" id=${foo[0].id}></div>
                <div class="column"><input type="radio" name="clickMe" id=${foo[1].id}></div>
                <div class="column"><input type="radio" name="clickMe" id=${foo[2].id}></div>
            </div>
        </section>
    `;
};

export default class ImageForm {
    
    render() {
        let dom = template();

        return dom;
    }

}