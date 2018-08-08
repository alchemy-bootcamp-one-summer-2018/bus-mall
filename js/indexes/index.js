import App from '/js/components/pages/app.js';

let root = document.getElementById('root');
let app = new App();
let dom = app.render();
root.appendChild(dom);