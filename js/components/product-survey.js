import html from '../html.js';
import ShowImage from './image-display-app.js';
import salesApi from '../services/sales-api.js';

// import getRandomProducts from '../services/sales-api.js';

let template = function() {

    return html `
    <h2>Vote for your favorite product:</h2>
        <section>  
        </section>
    `;
};

export default class ProductSurvey { 

    constructor(props) { // catches things from the parent
        this.products = props.products;
        this.handleClick = props.handleClick;
        this.totalClicks = 0;
    }
    
    render() {
        // console.log('ShowImage:', createItems()); //this used to be data
        // let products = createItems();
        let dom = template(); //(products)
        this.section = dom.querySelector('section');
        
        for(let i = 0; i < 3; i++) {
            let showImage = new ShowImage({ // anything you put inside this class constructor is passed down to the child
                
                product: this.products[i],
                
            });
                //     onSelect: (product) => {
                    //         this.product = product;
                    //         this.product.clicks++,
                    //         console.log('clicks', this.product.clicks);
                    
                    //         this.totalClicks++;
                    //         console.log('total clicks:', this.totalClicks);
                    
                    //         console.log('parent:', section);
                    
                    //         while(section.children.length) {
                        //             section.lastChild.remove();
                        //         }
                        
                        //         let randomProducts = salesApi.getRandomProducts();
                        //         console.log('second round of random products', randomProducts);
                        //         console.log('section', section.children);
                        
                        //         if(this.totalClicks > 4) {
                            //             console.log('RESULTS!');
                            //         }
                            //     }
                            // });
                            
                        
            this.section.appendChild(showImage.render());
        }
        console.log('this.section', this.section);



        this.section.addEventListener('click', (event) => {
            // this.product.clicks++,
            // console.log('clicks', this.product.clicks);
            
            let img = event.target;
            console.log('img', img);
            console.log('img.name', img.name);


            this.totalClicks++;
            console.log('total clicks:', this.totalClicks);
                    
            console.log('parent:', this.section);
            while(this.section.children.length) {
                this.section.lastChild.remove();
            }

            let randomProducts = salesApi.getRandomProducts();
            console.log('second round of random products', randomProducts);

            if(this.totalClicks > 4) {
                console.log('RESULTS!');
            }
                    // this.onSelect(this.product);
            console.log('hello');
        });

        return dom;
    }
}

   


