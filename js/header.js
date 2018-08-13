import html from '/js/html.js';

let template = function() {
    return html`
<div class="above-nav">
    <h1> BUSMALL </h1>
</div>
<nav>  
  <span class="menu-toggle">Menu</span>
  <div class="menu-content">
    <a href="/index.html">Survey</a>
    <a href="/results.html">Results</a>
  </div>
</nav>

<div class="grid">
<div class="header">
<div class="text-on-header">
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