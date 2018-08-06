import html from '../html.js';

let template = function() {
    return html`        
        <header>
            <h1>Bus Mall Market Research App</h1>
        </header>
        <main>
        </main>
    `;
};

export default class App {
    render() {
        let dom = template();
        let main = dom.querySelector('main');
        // main.appendChild('hello app!');
        main.innerHTML = '<p>Hello App!</p>';
        return dom;
    }
}

