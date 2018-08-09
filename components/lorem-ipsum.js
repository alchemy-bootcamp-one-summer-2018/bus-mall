import html from '../html.js';

let template = function() {
    return html`
    <div class="sidebar">
        <h2>Methodology</h2>
        <p>Lorem ipsum dolor amet locavore activated charcoal freegan sartorial, franzen snackwave portland ugh authentic bitters sustainable woke. Chartreuse knausgaard authentic taxidermy, hell of tousled portland master cleanse PBR&B street art vegan gastropub. Raclette truffaut cliche actually semiotics. Fashion axe banjo ennui blue bottle migas iPhone letterpress sriracha vegan roof party mustache small batch. Schlitz coloring book palo santo, meditation typewriter copper mug direct trade squid ramps pitchfork marfa vegan chia godard mixtape. Asymmetrical thundercats beard cred, aesthetic wolf snackwave freegan forage stumptown ethical drinking vinegar taxidermy.</p>
    </div>
    `;
};

export default class Methods{
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}