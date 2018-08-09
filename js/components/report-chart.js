import html from '/js/html.js';

let template = function() {
    return html`
        <h2>Results Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
};

export default class ReportChart {
    constructor(props) {
        this.results = props.results;
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];
        let data2 = [];

        for(let i = 0; i < this.results.length; i++) {
            const product = this.results[i];
            labels.push(product.name);
            data.push(product.votes);
            data2.push(product.views);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: '# of Votes',
                        data: data,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1
                    },
                    {
                        label: '# of Views',
                        data: data2,
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        stacked: false,
                        beginAtZero: true,
                        scaleLabel: {
                            labelString: 'Month'
                        },
                        ticks: {
                            stepSize: 1,
                            min: 0,
                            autoSkip: false
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                },
            }
        });


        return dom;
    }
}