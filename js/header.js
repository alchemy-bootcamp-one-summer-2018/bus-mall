import html from '/js/html.js';

let template = function() {
    return html`
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
 
<h1>Bus Mall</h1>
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