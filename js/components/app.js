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
                <h2>Let's vote!</h2>
                <div>
                    <form>
                        <legend>Select an image</legend>
                        <fieldset class="voting-grid">
                            <div class="module">
                                <img src="/img/banana.jpg"> 
                                <input class="radio" type="radio" id="image1" name="image" checked />
                            </div>
                            <div class="module">
                                <img src="/img/bag.jpg">
                                <input class="radio" type="radio" id="image2" name="image" />
                            </div>
                            <div class="module">
                                <img src="/img/boots.jpg">
                                <input class="radio" type="radio" id="image3" name="image" />
                            </div>
                        </fieldset>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <section class="results">
                <table>
                    <thead>
                        <th>Image name</th>
                        <th>Total votes</th>
                        <th>Times displayed</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Banana</td>
                            <td>3</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Beef Jerky</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    `;
};

export default class App {

    render() {
        let dom = template(); 

        
        return dom;
    }
}

