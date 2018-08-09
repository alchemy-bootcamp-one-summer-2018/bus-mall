import html from '/js/html.js';

let template = function() {
    return html`
        <h2>Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
};

export default class ReportChart{
    constructor(props) {
        this.results = props.results;
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];
        let dataViews = [];

        console.log('hello');

        for(let i = 0; i < this.results.length; i++) {
            let item = this.results[i];
            labels.push(item.name);
            data.push(item.clicks);
            dataViews.push(item.views);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: '# of Clicks',
                        data: data,
                        backgroundColor: 
                        'rgba(255, 99, 132, 0.2)',
                        borderColor: 
                        'rgba(255,99,132,1)',
                        borderWidth: 1
                    },
                    {
                        label: '# of Views',
                        data: dataViews,
                        backgroundColor: 
                        'rgba(24, 30, 10, 0.2)',
                        borderColor: 
                        'rgba(24, 30, 10, 1)',
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
            }
        });


        return dom;
    }
}
