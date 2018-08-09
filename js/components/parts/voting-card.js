import html from '/js/html.js';
// services component needs to use



let template = function(product) {
    return html`
            <div class="product" style="background: center / cover no-repeat url(${product.image})">
    `;
};

export default class VotingCard {

    constructor(props) {
        this.product = props.product;
        this.onSelect = props.onSelect;
    }

    render() {
        let dom = template(this.product);

        this.div = dom.querySelector('div');

        this.div.addEventListener('click', () => {
            this.onSelect(this.product.name);
        });


        return dom;
    }
}






















