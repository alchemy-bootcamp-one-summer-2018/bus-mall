// the template helper
import html from '../html.js';
import imageLoading from '../data-wrangling/data.js';

// services component needs to use
let foo = imageLoading();

let template = function(imageLoading) {
    return html`        
        <header>
            <h1>Greg's List</h1>
        </header>
        <main>
            <section class="auth"></section>
            <form class="submit-form">
                <section class="images">
                    <p><a href="for-sale.html">View For Sale Items</a></p>
                    <div class="row">
                        <div class="column">${foo[0].src}</div>
                        <div class="column">${foo[1].src}</div>
                        <div class="column">${foo[2].src}</div>
                    </div>
                </section>
                <section class="buttons">
                    <div class="row">
                        <div class="column"><input type="radio"></div>
                        <div class="column"><input type="radio"></div>
                        <div class="column"><input type="radio"></div>
                    </div>
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
        this.authSection = dom.querySelector('section.auth');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('I was just clicked!');
        });

        
        return dom;
    }
}
