import html from '../html.js';
// services component needs to use
import imageApi from '../services/image-api.js';
// import resultsApi from '../services/results-api.js';


let template = function() {
    return html`        
        <h2>Let's vote!</h2>
        <div>
            <form>
                <legend>Select an image</legend>
                <fieldset class="voting-grid">
                    <div class="module">
                        <img src="/img/banana.jpg">
                        <input class="radio" type="radio" id="image1" name="image" checked />
                    </div>
                    <div class="module">
                        <img src="/img/bag.jpg">
                        <input class="radio" type="radio" id="image2" name="image" />
                    </div>
                    <div class="module">
                        <img src="/img/boots.jpg">
                        <input class="radio" type="radio" id="image3" name="image" />
                    </div>
                </fieldset>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    `;
};

export default class Voting {


    render() {
        let dom = template();

        return dom;
    }
}






















