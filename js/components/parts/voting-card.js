import html from '/js/html.js';
// services component needs to use



let template = function() {
    return html`        
            <div class="module">
                <img src="/img/banana.jpg">
            </div>
    `;
};

export default class VotingCard {


    render() {
        let dom = template();

        return dom;
    }
}






















