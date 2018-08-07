import html from '../html.js';
import ShowImage from './image-display-app.js';
import Results from './results.js';
// import salesApi from '../services/sales-api.js';

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

        // let randNum = salesApi.getRandomNumber();
        // console.log('random number', randNum);

        return dom;
    }


    
}

// for(let j = 0; j < stores.length; j++) {

//     stores[j].cookieSalesPerStore = [];

//     for(let i = 0; i < 14; i++) {
//         let custPerHours = Math.floor(Math.random() * (stores[j].maxCust - stores[j].minCust)) + stores[j].minCust;
//         let cookieSales = custPerHours * stores[j].avgCookies;
//         //console.log('cookie sales:', cookieSales); 
        
//         randomHoursArray.push(custPerHours);
//         cookieSalesArray.push(cookieSales);
//         stores[j].cookieSalesPerStore.push(cookieSales);
//     }

// }