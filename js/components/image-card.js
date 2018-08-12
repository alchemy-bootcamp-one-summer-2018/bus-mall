import html from '../html.js';

let template = function(foo) {
    return html`        
            <div class="column">${foo.src}</div>
    `;
};

//Now I should be able to refer to individual image's id when clicked

export default class ImageCard {
    constructor(props) {
        this.image = props.image;
        this.onSelect = props.onSelect;

    }
    
    updateImage() {
        //foo = imageLoading();
    }

    render() {
        // let foo = imageLoading();
        let dom = template(this.image);
        let img = dom.querySelector('.column');
        img.addEventListener('click', () => {
            this.onSelect(this.image);
        });
        
        return dom;
    }

}