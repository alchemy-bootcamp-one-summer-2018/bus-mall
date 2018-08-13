import App from './js/components/app.js';

let app = new App();
let root = document.getElementById('root');
let dom = app.render();
root.appendChild(dom);

