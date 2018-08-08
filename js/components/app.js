import html from '../html.js';

// import usersApi from '../services/users-api.js';

import voting from './voting.js';
import Voting from './voting.js';
// import User from './user.js';

let template = function() {
    return html`        
        <header>
            <h1>Bus Mall</h1>
        </header>

        <main>
            <section class="voting"></section>
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


        let voting = new Voting(
            {}
        );
        this.voting = dom.querySelector(".voting");
        this.voting.appendChild(voting.render());


        return dom;
    }
}

