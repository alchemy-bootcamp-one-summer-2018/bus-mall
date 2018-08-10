import html from '/js/html.js';

import productApi from '/js/services/product-api.js';
// import VotingBox from '/js/components/boxes/voting-box.js';
import ResultCard from '/js/components/parts/result-card.js';

let template = function() {
    return html`        
        <header>
            <h1>Producty McProducty Product</h1>
        </header>
        
        <main>
            <section class="results-box">
            </section>
        </main>
    `;
};

export default class App {

    constructor() {
        this.test = "I'm a placeholder";
    }

    renderResultsBox(products) {

        products.forEach(product => {
            let resultCard = new ResultCard({
                image: product.image,
                views: product.views,
                votes: product.votes,
            });
            this.resultBox.appendChild(resultCard.render());
        });
    }

    render() {
        let dom = template();
        this.resultBox = dom.querySelector('.results-box');


        this.renderResultsBox(productApi.get());


        return dom;
    }
}

