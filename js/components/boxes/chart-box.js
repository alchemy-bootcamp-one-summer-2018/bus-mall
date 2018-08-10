import html from '/js/html.js';
// import Chart from '/js/libs/Chart.js';


let template = () => {
    return html`        
        <h2>Results Chart</h2>
        <div>
            <canvas width="800"></canvas>
        </div>
    `;
};

export default class ChartBox {

    constructor(props) {
        this.products = props.products;
    }

    // renderChart() {


    // }


    render() {
        let dom = template();

        let canvas = dom.querySelector('canvas');
        let chartTarget = canvas.getContext('2d');

        let labels = [];
        let data = [];

        console.log(this.products);

        this.products.forEach(product => {
            if(product.votes) {
                labels.push(product.name);
                data.push(product.votes);
            }
        });

        function getRandomColor() {
            let letters = '0123456789ABCDEF'.split('');
            let color = '#';
            for(let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        function getColorArray(count) {
            let data = [];
            for(let i = 0; i < count; i++) {
                data.push(getRandomColor());
            }
            return data;
        }
        
        let chartData = {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: data,
                backgroundColor: getColorArray(this.products.length),
                borderColor: getColorArray(this.products.length),
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






















