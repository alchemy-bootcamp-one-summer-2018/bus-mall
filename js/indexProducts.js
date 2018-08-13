import Products from './allProducts.js';

let root = document.getElementById('root');
let app = new Products();
root.appendChild(app.render());