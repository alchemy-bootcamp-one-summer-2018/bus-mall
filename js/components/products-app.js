import html from '../html.js';
import salesApi from '../services/sales-api.js';


let template = function() {
    return html `
        <header>
            <h1>Bus Mall</h1>
        </header>
        <body>
            <div>
            </div>
            <section>
            </section>
        </body>
      `;
};

export default class ProductApp {

    constructor() {
        this.items = salesApi.get();
    }

    render() {
        let dom = template();

        return dom;
    }  

}
