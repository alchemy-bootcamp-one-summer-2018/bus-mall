import html from './js/html.js';
import productApi from './js/services/productApi.js';

let template = function() {
    return html`
        <div>Results</div>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
   `;
};

export default class ResultsApp {
    constructor() {
        this.results = productApi.get();

    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i = 0; i < this.results.length; i++) {
            const result = this.results[i];
            labels.push(result.name);
            data.push(result.numberClicks);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                label: labels,
                datasets: [{
                    label: '# of views',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
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
        
        
     