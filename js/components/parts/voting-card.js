import html from '/js/html.js';
// services component needs to use



let template = function(product) {
    return html`        
            <div class="module">
                <img src="${product.image}">
            </div>
    `;
};

export default class VotingCard {

    constructor(props) {
        this.product = props.product;
    }

    render() {
        let dom = template(this.product);

        return dom;
    }
}






















