'use strict';
import html from '../html.js';
import IndividualProduct from './individual-product.js';
import ViewsChart from './views-chart.js';
import PercentChart from './percent-chart.js';

// form structure
let template = function() {
    return html`
    <form id='guess-form' >
    <div class = 'flex-box-choices'></div>
    <div class = 'button-container'>
        <button id = 'submit' type='submit'> Vote </button>
    </div>
    </form>`;
};

export default class ProductForm {
    constructor(props) {
        this.onSubmit = props.onSubmit;
        this.totalClicks = props.totalClicks;
        this.productsChosenList = props.productsChosenList;
        this.products = props.products;
        this.subset = props.subset;
    }

    update(props) {
        // create new product display
        this.products = props.products;
        this.subset = props.subset;

        try {
            while(this.flexBoxChoices.lastElementChild){
                this.flexBoxChoices.lastElementChild.remove();
            }
        }
        catch (err) {
            console.log('problem deleting:', err.message);
        }

        //display three new products
        for(let i = 0; i < this.subset.length; i++) {
            this.updateProduct(this.subset[i]);
        }
    }

    updateProduct(product) {
        let individualProduct = new IndividualProduct({
            product: product,
        });
        this.flexBoxChoices.appendChild(individualProduct.render());
    }
    render() {
        let dom = template();
        this.form = dom.querySelector('form');
        let error = dom.querySelector('p.error');
        // this.form.appendChild(this.productsChosenList.render());

        this.flexBoxChoices = dom.querySelector('div.flex-box-choices');
        let subset = this.subset;

        for(let i = 0; i < subset.length; i++) {
            this.updateProduct(subset[i]);
        }

        // listen for form submission
        this.form.addEventListener('submit', (event) => {
            // #1 Prevent default posting of the form
            event.preventDefault();

            // #2 Gather up data
            let elements = this.form.elements;
            let productChosen = elements.image.value;

            // # Update user preferences
            console.log(productChosen);
            this.stores = findIndexOfSelection(productChosen, this.products);

            // #4 Call action
            try {
                this.onSubmit(this.products);
                // #4 Process success or failure
                this.form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // #4 Process success or failure
                console.log(err);
                error.textContent = err.message;
            }
            // keep track of click max
            this.totalClicks += 1;

            // if total clicks is over 25 display summary data instead
            if(this.totalClicks === 25){
                alert('25 clicks!');
                // clear market survey
                while(this.form.lastElementChild){
                    this.form.lastElementChild.remove();
                }
                console.log('total clicks', this.totalClicks);

                // display user summary charts
                let percentChart = new PercentChart({
                    products: this.products
                });
                let viewsChart = new ViewsChart({
                    products: this.products
                });
                this.form.appendChild(percentChart.render());
                this.form.appendChild(viewsChart.render());
            }
        });
        return dom;
    }
}

function findIndexOfSelection(value, products){
    for(let i = 0; i < products.length; i++){
        if(products[i]['name'] === value) {
            products[i]['numSelected'] += 1;
        }
    }
    return products;
}