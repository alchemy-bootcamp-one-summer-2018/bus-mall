// the template helper
import html from '../html.js';
import ImageForm from '../components/image-form.js';
import data from '../data-wrangling/data.js';
import ImageReport from '../components/image-report.js';

// services component needs to use

let template = function() {
    return html`        
        <header>
            <h1>Greg's List</h1>
        </header>
        <main>
            <section class="auth"></section>
            <p><a href="for-sale.html">View For Sale Items</a></p>
            <p>Yes, we advocate the sale of children and small animals! Ask us for more details!</p>
            <form class="submit-form">
                <section class="images">
                </section>
            </form>
        </main>
    `;
};

export default class App {

    constructor() {
        this.images = data.imageLoading();
        this.results = data.results();
        this.refreshcounter = 0;
    }

    render() {
        let dom = template();
        let form = dom.querySelector('form');
        let images = dom.querySelector('.images');
        let main = dom.querySelector('main');
        let imageProps = {
            images: this.images,

            onSelect: (image) => {
                console.log('Ding dong, doorbell');
                
                image.selected += 1;
                this.refreshcounter += 1;
                console.log(image);
                console.log(this.refreshcounter);
                

                if(this.refreshcounter === 25){
                    console.log('Time to show results!');
                    imageForm.disableImages(this.images);
                    let imageReport = new ImageReport({
                        report: this.results
                    });
                    
                    console.log('This should be the images array...', this.results);
                    main.appendChild(imageReport.render());
                }
                else {
                    this.images = data.imageLoading();
                    imageForm.updateImages(this.images);
                }
                
            }
        };
        let imageForm = new ImageForm(imageProps);
        images.appendChild(imageForm.render());
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            imageForm.updateImage();
            console.log('I was just clicked!');
        });
        
        return dom;
    }
}
