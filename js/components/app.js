import html from '../html.js';
import VotingArea from './voting.js';
import productApi from '../services/product-api.js';
import Report from './results-report.js';


let template = function() {
    return html`        
        <header>
            <h1>Bus Mall Market Research App</h1>
        </header>
        <section class="instructions">
            <p id='instructions'>The three images below are products we are considering selling in Bus Mall. Please click on the image of the product you are most likely to buy to vote for it. After 25 votes, you can see our poll results.</p>
        </section>
        <section class="voting"></section>
        <section class="results"></section>
    `;
};



export default class App {
    constructor() {
        this.products = productApi.get();
        this.totalCount = 0;
    }

    render() {
        let dom = template();
        let voting = dom.querySelector('.voting');
        let results = dom.querySelector('.results');
        let products = productApi.getRandomProducts();
        // let resultsSection = dom.querySelector('.results-section');

        let votingArea = new VotingArea ({
            products: products,
            onLoad: (product) => {
                product.views++;
                console.log(product.name, 'has been viewed', product.views, 'times');
            },
            onClick: (product) => {
                console.log('app', product.name, 'was clicked');
                product.votes++;
                this.totalCount++;
                if(this.totalCount >= 25) {
                    console.log('done!');
                    let report = new Report ({
                        products: this.products
                    });
                    results.appendChild(report.render());
                    voting.style.display = 'none';
                    
                }
                console.log(product.name, 'has been clicked', product.votes, 'times');
                votingArea.update({
                    products: productApi.getRandomProducts()
                });
                
                
            },
            
        });
        
        voting.appendChild(votingArea.render());

        return dom;

    }
}


