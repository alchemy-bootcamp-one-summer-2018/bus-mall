
import html from '../html.js';
//import products from '../products.js';


let template = function() {
    return html`
    <div>
    <h1>Bus Mall</h1>
    </div>

`;    
};
//console.log('hello world');
export default class App {
    render() {
        let dom = template();
        this.div = dom.querySelector('div'); 
        this.div.appendChild(render(tally));
        return dom;


    }
}