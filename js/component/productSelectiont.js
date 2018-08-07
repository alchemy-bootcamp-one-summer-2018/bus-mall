import html from '../html.js';

let template = function() {

    return html`

<h1> Which Product would you most likely purchase" </h1>
    
        <img
        <!-- <input type="radio" id="image-1" name=""/>
        <label>Product One</label>
        <input type="radio" id="image-2" name=""/>
        <label>Product Two</label>
        <input type="radio" id="image-3" name=""/>
        <label>Product Three</label> -->

    `;

};
    
export default class imageSelection {
    
    render() {
        let dom = template();
    
        return dom;
    }
}