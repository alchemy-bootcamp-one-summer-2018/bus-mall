import html from '/js/html.js';

import Header from '/js/components/layout/header.js';
import Footer from '/js/components/layout/footer.js';

import productApi from '/js/services/product-api.js';
// import VotingBox from '/js/components/boxes/voting-box.js';
import ResultCard from '/js/components/parts/result-card.js';

let template = function() {
    return html`        
        <header class="header-container"></header>
        
        <main>
            <h2>Producty McProducty Product</h2>
            <section class="results-box">
            </section>
        </main>

        <footer></footer>
    `;
};

export default class App {

    constructor() {
        this.test = 'I a placeholder';
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

        this.header = dom.querySelector('header');
        this.footer = dom.querySelector('footer');
        let header = new Header();
        let footer = new Footer();
        this.header.appendChild(header.render());
        this.footer.appendChild(footer.render());

        this.resultBox = dom.querySelector('.results-box');


        this.renderResultsBox(productApi.get());


        return dom;
    }
}

