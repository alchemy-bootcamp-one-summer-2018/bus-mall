import html from '../html.js';

let template = function() {
    return html`
        <h2>Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
};

export default class ProductChart {
    constructor(props) {
        this.products = props.products;
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let counts = [];
        let views = [];
        let percents = [];

        for(let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            labels.push(product.name);
            counts.push(product.count);
            views.push(product.views);
            percents.push(product.count / product.views);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: counts,

                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    
                    borderColor: 'rgba(255,99,132,1)',

                    borderWidth: 1
                },
                {
                    label: '# of Views',
                    data: views,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                
                    borderColor: 'rgba(54, 162, 235, 1)',

                    borderWidth: 1
                },
                {
                    label: '%',
                    data: percents,
                    backgroundColor: 'rgba(0, 255, 0, 0.2)',
                
                    borderColor: 'rgba(0, 255, 0, 1)',

                    borderWidth: 1
                },
                ]
                

            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });



        return dom;
    }
}