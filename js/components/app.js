import html from '../html.js';

let template = function() {
    return html`        
        <header>
            <h1>Bus Mall Market Research App</h1>
        </header>
        <body>
            <p id='instructions'>The three images below are products we are considering selling in Bus Mall. Please click on the image of the product you are most likely to buy to vote for it. After 25 votes, you can see our poll results.</p>
        <main>

        </main>
        </body>
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

