import html from './html.js';



let template = function() {
    return html`
    <div>
        <h2>What product would you most likely buy</h2>
        <h3><span></span></h3>
        <div class=""></div>
        <ul></ul>
    </div>
    `;
};

export default class Product {
    constructor() {
      
      
    }

    
    render() {
        let dom = template();
        this.div = dom.querySelector('div');
        


        //this.ul.addEventListener('click', this.something here);

        return dom;
    }
}

