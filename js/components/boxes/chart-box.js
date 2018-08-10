import html from '/js/html.js';
// import Chart from '/js/libs/Chart.js';


let template = () => {
    return html`        
        <h2>Results Chart</h2>
        <div>
            <p>Below is the chart!</p>
            <canvas width="800"></canvas>
        </div>
    `;
};

export default class ChartBox {

    constructor(props) {
        this.products = props.products;
    }


    render() {
        let dom = template();

        let canvas = dom.querySelector('canvas');
        let chartTarget = canvas.getContext('2d');

        let labels = ['a', 'b', 'c'];
        let data = [20, 23, 10];

        console.log(this.products);

        // this.products.forEach(product => {
        //     if(product.votes) {
        //         labels.push(product.name);
        //         data.push(product.votes);
        //     }
        // })

        
        let chartData = {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, .3)',
                    'rgba(54, 162, 235, .3)',
                    'rgba(255, 206, 86, .3)',
                    'rgba(75, 192, 192, .3)',
                    'rgba(153, 102, 255, .3)',
                    'rgba(255, 159, 64, .3)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }]
        };

        let chartOptions = {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        };

        this.chart = new Chart(chartTarget, {
            type: 'horizontalBar',
            data: chartData,
            options: chartOptions
        });


        return dom;
    }
}






















