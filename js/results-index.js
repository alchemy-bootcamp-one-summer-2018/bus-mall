import ResultsApp from './components/results-app.js';

let root = document.getElementById('results-root');
let resultsApp = new ResultsApp();
root.appendChild(resultsApp.render());