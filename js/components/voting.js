import html from '../html.js';
import RandomImage from './random-images.js';

let template = function() {
    return html`
        <main>
        <p>Hello Voting Area!</p>
        <section class="voting-area"></section>
        </main>
    `;

};



export default class VotingArea {
    constructor(props) {
        this.voteDisplay = props.voteDisplay;
    }


    render() {
        let dom = template();
        let votingArea = dom.querySelector('section.voting-area');
        let randomImage = new RandomImage ({
        
        });
        
        votingArea.appendChild(randomImage.render());

        return dom;
    }
}