import html from '../html.js';
import ProductForm from './product-form.js'; 
import productApi from '../services/productApi.js';
import ResultsHolder from './resultsHolder.js';
import ChartContainer from './chart.js';

let template = function() {
    return html `
        <header>
            <h1> BusMall </h1>
        </header>
        <main></main>
        <section></section>
        <section id="chart"></section>
    `;
};
export default class App {
    
    constructor(){
        this.products = productApi.getRandomThree();
        this.allProducts = productApi.get();
        this.rounds = 25;
    }

    renderResults(){
        
        let resultsHolder = new ResultsHolder({
            products: this.allProducts
        });
        
        this.section.appendChild(resultsHolder.render());

    }
    renderChart(){
        let chartContainer = new ChartContainer({
            products: this.allProducts
        });
        this.chartSection.appendChild(chartContainer.render());
    }
    
    render() {
        let dom = template();
        let main = dom.querySelector('main');
        this.section = dom.querySelector('section');
        this.chartSection = dom.querySelector('#chart');
        
        let productForm = new ProductForm({
            products: this.products,
           
            onSelect: (product) => {
                this.rounds--;
                console.log('you have ', this.rounds, 'rounds left!');
                productApi.handleSelect(product.id);
                let updateProducts = productApi.getRandomThree();
                productForm.updateForm(updateProducts);

                if(!this.rounds) {
                    productForm.removeImages();
                    this.renderResults();
                    this.renderChart();
                    
                }               
            }
        });

        main.appendChild(productForm.render());
        
        return dom;  
    }

}