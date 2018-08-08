import ProductsApp from './components/products-app.js';

let root = document.getElementById('root');
let app = new ProductsApp();

root.appendChild(app.render());
