import ResultsApp from './components/results-app.js';

let root = document.getElementById('root');
let resultsApp = new ResultsApp();
root.appendChild(resultsApp.render());