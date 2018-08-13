import App from './products-app.js';

let app = new App();
let root = document.getElementById('root');
let dom = app.render();
root.appendChild(dom);

