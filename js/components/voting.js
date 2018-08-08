import html from '../html.js';
import RandomImage from './random-images.js';
import ResultsArea from './results.js';

let template = function() {
    return html`
        <main>
        <p>Hello Voting Area!</p>
        <section class="voting-area"></section>
        <section class="results"></section>
        </main>
    `;

};

export default class VotingArea {
    constructor(props) {
        this.products = props.products;
        this.onClick = props.onClick;
        this.onLoad = props.onLoad;
        this.showResults = props.showResults;
    }

    
    update(props) {
        this.products = props.products;
        this.clearImages();
        this.renderImages();
    }
    
    clearImages() {
        while(this.votingArea.lastElementChild) {
            this.votingArea.lastElementChild.remove();
        }
    }
    
    renderResults() {
        for(let i = 0; i < this.products.length; i++) {
            let resultsArea = new ResultsArea ({
                product: this.products[i],
                showResults: this.showResults
            });
            this.votingArea.appendChild(resultsArea.render());
        }
        
    }
    
    renderImages() {
        for(let i = 0; i < this.products.length; i++) {
            let randomImage = new RandomImage ({
                product: this.products[i],
                onClick: this.onClick,
                onLoad: this.onLoad
            });
            
            this.votingArea.appendChild(randomImage.render());
        }
    }
    
    render() {
        let dom = template();
        this.votingArea = dom.querySelector('section.voting-area');
        this.renderImages();
        this.renderResults();

        return dom;
    }
}