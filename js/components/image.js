import html from '/js/html.js';
//import productList from '../../products.js';


let template = function(image) {
    return html`
      <h1>these are my images </h1>  
      <div> 
        <img src="../../assets/${image.url}"
      </div>
   `;
};

export default class Image {
    constructor(props) {
        this.image = props.image;

    }

    render() {
        let dom = template(this.image);
        this.div = dom.querySelector('div');
        console.log('this.images', this.image);
        return dom;
    }
}
