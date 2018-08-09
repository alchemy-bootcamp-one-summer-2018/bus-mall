import html from '/js/html.js';


const template = (image, views, votes) => {
    return html`
        <li class="results">
            <div class="product" style="background: center / cover no-repeat url(${image})">
                <h2>Views: ${views}</h2>
                <h2>Votes: ${votes}</h2>
            </div>
        </li>
    `;
};


export default class ResultCard {
    constructor(props) {
        this.image = props.image;
        this.views = props.views;
        this.votes = props.votes;
    }

    render() {
        let dom = template(this.image, this.views, this.votes);
        return dom;
    }
}