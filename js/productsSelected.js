import html from '../html.js';



let template = function(productselection) {
    return html`
    <div>
        <h2>What product would you most likely buy</h2>
        <h3><span>${productselection.image}</span></h3>
        <div class="results"></div>
        <ul></ul>
    </div>
    `;
};

export default class Survey {
    constructor(props) {
        this.products = props.products;
        this.products = props.products;
      
    }

    
    render() {
        let dom = template();
        this.div = dom.querySelector('div');
        
        this.renderProducts(this.products);

        //this.ul.addEventListener('click', this.something here);

        return dom;
    }
}

