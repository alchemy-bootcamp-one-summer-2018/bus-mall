// the template helper
import html from '../html.js';
// services component needs to use

let template = function() {
    return html`        
        <header>
            <h1>Greg's List</h1>
        </header>
        <main>
            <section class="auth"></section>
            <section>
                <p><a href="for-sale.html">View For Sale Items</a></p>
            </section>
        </main>
    `;
};

export default class App {

    render() {
        let dom = template(); 
        this.authSection = dom.querySelector('section.auth');
        
        return dom;
    }
}
