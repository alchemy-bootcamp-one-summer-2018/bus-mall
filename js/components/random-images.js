import html from '../html.js';

let template = function(name) {
    return html`
        <img src="/img/${name}.jpg" alt="${name}" class="${name}">
    `;

};


export default class RandomImage {
    constructor(props) {
        this.product = props.product;
        this.onClick = props.onClick;
    }
    render() {
        let dom = template(this.product.name); 



        let product = this.product.name;

        let one = dom.querySelector('img');
        one.addEventListener('click', () => {
            console.log(product, 'was clicked');
            this.onClick(this.product);

        
        
            //     getRandomImages();
        //     console.log('three new images', threeImages);
        //     imageArea.innerHTML = threeImages;
        //     return imageArea.innerHTML;
        });
        
        // let two = dom.querySelector(`img.${secondProduct}`);
        // console.log('two', two);
        // two.addEventListener('click', () => {
        //     threeImages = '';
        //     threeNames = [];
        //     getRandomImages();
        //     console.log('three new images', threeImages);
        //     imageArea.innerHTML = threeImages;
        //     return imageArea.innerHTML;
        // });
        
        // let three = dom.querySelector(`img.${thirdProduct}`);
        // console.log('three', three);
        // three.addEventListener('click', () => {
        //     threeImages = '';
        //     threeNames = [];
        //     getRandomImages();
        //     console.log('three new images', threeImages);
        //     imageArea.innerHTML = threeImages;
        //     return imageArea.innerHTML;
        // });

        return dom;
    }
}