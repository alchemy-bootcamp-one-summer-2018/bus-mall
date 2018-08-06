import html from '../html.js';

let template = function() {
    return html`
        <header>
            <h1>Temporary Header</h1>
        </header>

        <main>
            <section id="product-survey"></section>
            <section id="survey-results"></section>
        </main>
    
    `;
};

export default class App {

    render() {
        let dom = template();

        return dom;
    }
}