// the template helper
import html from '../html.js';
// services component needs to use
// import usersApi from '../services/users-api.js';
// // child components
// import LoginForm from './login-form.js';
// import User from './user.js';

let template = function() {
    return html`        
        <header>
            <h1>Bus Mall</h1>
        </header>

        <main>
            <section class="voting">
                <div class="voting-grid">
                    <div class="module">1</div>
                    <div class="module">2</div>
                    <div class="module">3</div>                
                </div>
            </section>
            <section class="results"></section>
        </main>
    `;
};

export default class App {

    render() {
        let dom = template(); 

        
        return dom;
    }
}

