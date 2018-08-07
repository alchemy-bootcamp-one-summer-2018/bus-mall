import html from '../html.js';
import data from '../products-api.js';
let template = function(createProducts) {
    return html`
    <section>
    <div>
    <img src=${data.image}>
    </div>
    </section>    
    <main></main>
`;
};

render() {  
    let dom = template();
     
    return dom;
}

