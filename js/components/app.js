import html from '../html.js';

// import 

let template = function() {
    return html `
        <header>
            <h1> Bus Mall </h1>
        </header>
    `;
};
export default class App {
    
    render() {
        let dom = template();
        return dom;  
    }
}