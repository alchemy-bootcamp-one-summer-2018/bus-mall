import html from '/js/html.js';

import VotingCard from '/js/components/parts/voting-card.js'
// services component needs to use


// import imageApi from '../../services/image-api.js';
// import resultsApi from '../services/results-api.js';


let template = function() {
    return html`        
        <h2>Let's vote!</h2>
        <div class="voting-card"></div>
    `;
};

export default class VotingBox {

    constructor(props) {
        this.products = props.products;
    }

    render() {
        let dom = template();

        
        this.votingCard = dom.querySelector(".voting-card");
        
        for(let i = 0; i < 3; i++){
            let votingCard = new VotingCard(
                {product: this.products[i]}
            );
            this.votingCard.appendChild(votingCard.render());

        }


        return dom;
    }
}






















