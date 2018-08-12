import html from '../html.js';
import data from '../data-wrangling/data.js';
import ImageCard from './image-card.js';

let template = function() {
    return html`        
        <div class="row">
        </div>
    `;
};



export default class ImageForm {

    constructor(props) {
        this.images = props.images;
        this.onSelect = props.onSelect;
    }
    
    updateImages(props) {
        this.images = props;
        console.log(props);
        while(this.row.lastElementChild) {
            this.row.lastElementChild.remove();
        }

        this.renderImages();
    }

    disableImages(props) {
        this.images = props;
        while(this.row.lastElementChild) {
            this.row.lastElementChild.remove();
        }
    }

    renderImages() {
        for(let i = 0; i < this.images.length; i++) {
            let imageCard = new ImageCard(
                {
                    image: this.images[i],
                    onSelect: this.onSelect
                }
            );
            this.row.appendChild(imageCard.render());
        }
    }

    render() {
        let foo = data.imageLoading();
        let dom = template(foo);
        this.row = dom.querySelector('.row');
        
        this.renderImages();

        return dom;
    }

}