import html from '../html.js';

let template = function() {
    return html`
        <div id="voting-area">
            <p>Hello Voting Area!</p>
        </div>
    `;

};

export default class VotingArea {
    constructor(props) {
        this.voteDisplay = props.voteDisplay;
    }

    render() {
        let dom = template(this.votingArea); 
        
        return dom;
    }
}