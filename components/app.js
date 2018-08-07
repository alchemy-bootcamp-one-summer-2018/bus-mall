import html from '../html.js'; 
 
let template = function() {
    return html`
        <header>
            <h1> Please pick a product</h1>
            </header>
            <main>
            <section></section>
            <div>
            </div>
            </main>
    `;
};


export default class App {
    render() {
        let dom = template();
        let main = dom.querySelector('main');

        return dom;
    }
}


