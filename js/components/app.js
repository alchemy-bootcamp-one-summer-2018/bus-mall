// the template helper
import html from '../html.js';
import ImageForm from '../components/image-form.js';

// services component needs to use

let template = function(imageLoading) {
    return html`        
        <header>
            <h1>Greg's List</h1>
        </header>
        <main>
            <section class="auth"></section>
            <p><a href="for-sale.html">View For Sale Items</a></p>
            <form class="submit-form">
                <section class="images">
                </section>
                <button>submit</button>
            </form>
        </main>
    `;
};

export default class App {

    render() {
        let dom = template();
        let form = dom.querySelector('form');
        let images = dom.querySelector('.images');
        this.authSection = dom.querySelector('section.auth');
        let imageForm = new ImageForm();
        images.appendChild(imageForm.render());
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('I was just clicked!');
        });

        
        return dom;
    }
}
