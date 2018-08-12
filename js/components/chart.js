import html from '/js/html.js';

let template = function() {
    return html`
        <h2>Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>        
   `;
};

export default class ChartContainer {
    constructor(props) {
        this.products = props.products;       
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let votes = [];
        let viewed = [];

        for(let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            labels.push(product.name);
            votes.push(product.votes);
            viewed.push(product.viewed);
        }

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: votes, 
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)'
                        
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 0, 0, 1)'                        
                    ],
                    borderWidth: 2
                },
                {
                    label: '# of Views',
                    data: viewed, 
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)'                        
                    ],
                    borderColor: [
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',                        
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(0, 0, 255, 1)'                        
                    ],
                    borderWidth: 2
                }],
            },
            options: {
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