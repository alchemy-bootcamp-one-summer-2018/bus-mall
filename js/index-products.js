import ProductApp from './components/products-app.js';

let root = document.getElementById('root');
let productApp = new ProductApp();
root.appendChild(productApp.render());