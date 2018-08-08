import html from './html.js';

let template = function(images) {

    return html`

    <img class="image-1" src=${images[0].image}>
    <img class="image-2" src=${images[1].image}>
    <img class="image-3" src=${images[2].image}>

    <button onclick="getRandomImages()">submit your selection</button>

    `;

};


export default class ProductImages {

    constructor(props){ //whatever is passed from app(parent)
        this.images = props.images;

    }

    
    


    render() {
        
        let dom = template(this.images);
        console.log('this.images: ', this.images);
        return dom;
    }
}