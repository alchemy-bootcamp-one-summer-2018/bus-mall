import html from '../html.js';
import ShowImage from './image-display-app.js';
import Results from './results.js';

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

export default class App {

    render() {
        let dom = template();
        let div = dom.querySelector('div');
        let showImage = new ShowImage();
        div.appendChild(showImage.render());
        console.log('show image:', showImage);

        let section = dom.querySelector('section');
        let results = new Results();
        section.appendChild(results.render());
        console.log('results', results);

        return dom;
    }
    
}

// let root = document.getElementById('root');
// let app = new App();
// root.appendChild(app.render());
// import data into app.js, save it to a variable, make sure its in there with console log, 
