import ProductsApp from './components/products-app.js';

let root = document.getElementById('root');
let productsApp = new ProductsApp();
root.appendChild(productsApp.render());