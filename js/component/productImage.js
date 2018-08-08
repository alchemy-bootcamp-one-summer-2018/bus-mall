import html from '../html.js';

let template = function(images) {

    return html`

    <img class="image-1" src=${images[0].image}>
    <img class="image-2" src=${images[1].image}>
    <img class="image-3" src=${images[2].image}>

<button id="thebutton" onclick="getRandomImages()">submit your selection</button>

    `;

};

//button(EventListener) needs to generate next round of images and record data
// of selected images.

// document.getElementById('thebutton').addEventListener('click', function(e) {
//     if(e.target && e.target.img- === 'image') 

// });

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