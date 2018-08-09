import html from '/js/html.js';

// import imageApi from '../../services/image-api.js';
// import resultsApi from '../services/results-api.js';


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
       
    }


    render() {
        let dom = template();

        return dom;
    }
}






















