import html from '../html.js';

let template = function() {
    return html `
        <header>
            <h1>Bus Mall</h1>
        </header>
        <body>
            <div>

            </div>
        </body>
      `;
};

export default class App {

    render() {
        let dom = template();

        return dom;
    }

    
}
