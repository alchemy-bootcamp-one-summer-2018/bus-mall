import html from '/js/html.js';
import Channel from './vote.js';

let template = function() {
    return html`
        <ul></ul>
    `;
};

export default class ImageSelector {
    constructor(props) {
        this.vote = props.vote;
        this.onVote = props.onVote;
    }

    update(props) {
        this.votes = props.votes;

        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }

        this.renderList();
    }
    renderList() {
        for(let i = 0; i < this.vote.length; i++) {
            let vote = new Vote( {
                vote: this.votes[i],
                onSelect: this.onSelect
            });
            this.ul.appendChild(vote.render());
        }
    }

    render() {
        let dom = template();
        this.ul = dom.querySelector('ul');

        this.renderList();
        return dom;
    }
}