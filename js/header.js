import html from '/js/html.js';

let template = function() {
    return html`
<div class="above-nav">
    <h1> BUSMALL </h1>
</div>
<nav>  
  <span class="menu-toggle">Menu</span>
  <div class="menu-content">
    <a href="#">Home</a>
    <a href="#">Survey</a>
    <a href="#">Results</a>
  </div>
</nav>

<div class="grid">
<div class="header">
<div class="text-on-header">
<p> make your commute something to look forward to</p>
<h1>Get A Free Hop Pass</h1>
<h3>Participate in our survey and get <b> a free </b> month on your HOP pass.</h3>
<button type=onclick> Take the survey </button>
</div>
</div>
</div>

   `;
};

export default class Header {
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}