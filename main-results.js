import ResultsApp from './components/results-app.js';

let root = document.getElementById('root');
let app = new ResultsApp();

root.appendChild(app.render());