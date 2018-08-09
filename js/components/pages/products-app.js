import html from '/js/html.js';

// import productApi from '/js/services/product-api.js';
// import VotingBox from '/js/components/boxes/voting-box.js';
// import ResultCard from '/js/components/parts/result-card.js';

let template = function() {
    return html`        
        <header>
            <h1>Producty McProducty Product</h1>
        </header>
        
        <main>
            <section>
                <div class="chart-box"></div>
            </section>
        </main>
    `;
};

export default class App {

    constructor() {
        this.test = "I'm a placeholder";
    }


    render() {
        let dom = template();

        return dom;
    }
}

