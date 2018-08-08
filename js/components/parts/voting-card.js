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
        this.onSelect = props.onSelect;
    }

    render() {
        let dom = template(this.product);

        let div = dom.querySelector('div');
        div.addEventListener('click', () => {
            this.onSelect(this.product);
        });


        return dom;
    }
}






















