import html from '/js/html.js';
import VotingCard from '/js/components/parts/voting-card.js';
import productApi from '/js/services/product-api.js';


// import imageApi from '../../services/image-api.js';
// import resultsApi from '../services/results-api.js';


let template = (rounds) => {
    return html`        
        <h2>Let's vote!</h2>
        <h3>Rounds Left: <p class="count" style="display: inline;">${rounds}</p></h3>
        <div class="voting-container"></div>
    `;
};

export default class VotingBox {

    constructor(props) {
        this.products = props.products;
        this.rounds = props.rounds;
        this.onSelect = props.onSelect;
    }
    
    renderProducts(products) {
        for(let i = 0; i < products.length; i++){
            let votingCard = new VotingCard({
                product: products[i],
                onSelect: this.onSelect
            });
            this.votingContainer.appendChild(votingCard.render());
        }
    }
    
    newRound() {

        this.count.innerText = this.rounds;

        this.removeRow();

        this.products = productApi.getRandomProducts();
        this.renderProducts(this.products);
    }

    removeRow() {
        while(this.votingContainer.children.length) {
            this.votingContainer.lastChild.remove();
        }
    }

    render() {
        let dom = template(this.rounds);
        this.count = dom.querySelector('.count');
        this.votingContainer = dom.querySelector('.voting-container');

        this.renderProducts(this.products);

        return dom;
    }
}


