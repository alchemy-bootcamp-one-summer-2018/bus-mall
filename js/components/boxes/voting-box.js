import html from '../../html.js';
// services component needs to use
import imageApi from '../../services/image-api.js';
// import resultsApi from '../services/results-api.js';


let template = function() {
    return html`        
        <h2>Let's vote!</h2>
        <div class="voting-grid">
            <div class="module">
                <img src="/img/banana.jpg">
            </div>
            <div class="module">
                <img src="/img/bag.jpg">
            </div>
            <div class="module">
                <img src="/img/boots.jpg">
            </div>
        </div>
    `;
};

export default class Voting {


    render() {
        let dom = template();

        return dom;
    }
}






















