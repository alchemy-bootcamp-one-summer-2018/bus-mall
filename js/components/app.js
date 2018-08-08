import html from '../html.js';
import VotingArea from './voting.js';
import productApi from '../services/product-api.js';


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
        
        let products = productApi.getRandomProducts();

        let votingArea = new VotingArea ({
            products: products,
            onLoad: (product) => {
                product.views++;
                console.log(product.name, 'has been viewed', product.views, 'times');
            },
            onClick: (product) => {
                console.log('app', product.name, 'was clicked');
                product.votes++;
                votingArea.update({
                    products: productApi.getRandomProducts()
                });
            },
            showResults: (product) => {
                votingArea.update({
                    '<p>The results are in<p>'
                });
            },

        });

        main.appendChild(votingArea.render());

        return dom;

    }
}


